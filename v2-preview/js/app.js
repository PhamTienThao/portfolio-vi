'use strict';
// Các dự án và liên kết video dưới đây được đối chiếu từ index.html hiện tại.
// Thumbnail lấy trực tiếp từ website đang hoạt động (cần mạng Internet).
const BASE='https://phamtienthao.site/';
const projects=[
  {title:'Typography Style',type:'viral',label:'VIRAL',image:'images/Viral/typography.webp',video:'5ofj41H_5c4'},
  {title:'Máy duỗi tóc',type:'review',label:'REVIEW',image:'images/Video Review/glampalm.webp',video:'FFEnl9A93Ig'},
  {title:'Product Motion 1',type:'motion',label:'MOTION',image:'images/Motion/1.webp',video:'bPn0JbsB_NI'},
  {title:'Phỏng vấn đường phố',type:'viral',label:'VIRAL',image:'images/Variety/1.webp',video:'FvE2vj-2TUk'},
  {title:'Kem chống nắng',type:'review',label:'REVIEW',image:'images/Video Review/caryophy.webp',video:'t1db1UjMPoM'},
  {title:'Video chạy ADS',type:'viral',label:'ADS',image:'images/Viral/videochayads.webp',video:'2eZS-C71Ijk'},
  {title:'Logo Animation',type:'motion',label:'MOTION',image:'images/Motion/4.webp',video:'IovHCHt7XSY'},
  {title:'Chia sẻ kiến thức',type:'viral',label:'VIRAL',image:'images/Viral/chiasekienthuc.webp',video:'Y7w7iaOTGj4'},
  {title:'Trailer sự kiện',type:'viral',label:'VIRAL',image:'images/Viral/trailersukien.webp',video:'g7p0ZYGuWVs'},
  {title:'Nước giặt',type:'review',label:'REVIEW',image:'images/Video Review/joykity.webp',video:'kDmGRk1H5go'},
  {title:'Product Motion 2',type:'motion',label:'MOTION',image:'images/Motion/2.webp',video:'-B7kcZ3F9tE'},
  {title:'Hình ảnh thiết kế',type:'design',label:'THIẾT KẾ',image:'images/Gallery/1/thumb-1.webp',imageOnly:true},
  {title:'Bộ ảnh — Hoàng hôn',type:'design',label:'BỘ SƯU TẬP',image:'images/Gallery/5/thumb-5.webp',imageOnly:true}
];
const escapeHTML=str=>String(str).replace(/[&<>"']/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const routeNames=['home','about','projects','contact'];
const navLinks=[...document.querySelectorAll('[data-route]')];
const nav=document.getElementById('main-nav');
const toggle=document.getElementById('menu-toggle');
const pages=[...document.querySelectorAll('.page')];
function route(){
 const slug=location.hash.slice(1);
 const current=routeNames.includes(slug)?slug:'home';
 pages.forEach(p=>{const active=p.dataset.page===current;p.hidden=!active;p.classList.toggle('is-active',active)});
 navLinks.forEach(a=>{if(!a.classList.contains('nav-link'))return;const active=a.dataset.route===current;a.classList.toggle('is-current',active);if(active){a.setAttribute('aria-current','page')}else{a.removeAttribute('aria-current')}});
 nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Mở menu');
 document.title=`${({home:'Trang chủ',about:'Thông tin',projects:'Dự án',contact:'Liên hệ'})[current]} | Thạo Video Editor`;
 window.scrollTo({top:0,left:0,behavior:'instant'});
}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Đóng menu':'Mở menu')});
document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target)){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}});
window.addEventListener('hashchange',route);
route();

const grid=document.getElementById('project-grid');
function drawProjects(filter='all'){
 const shown=projects.filter(p=>filter==='all'||p.type===filter);
 grid.innerHTML=shown.map((p,i)=>`<article class="project-card"><button class="project-thumb" data-project="${projects.indexOf(p)}" type="button" aria-label="Xem ${escapeHTML(p.title)}"><img loading="lazy" src="${BASE+encodeURI(p.image)}" alt="Thumbnail dự án ${escapeHTML(p.title)}"><span class="project-kind">${escapeHTML(p.label)}</span><span class="play-overlay" aria-hidden="true">${p.imageOnly?'↗':'▶'}</span></button><div class="project-meta"><strong>${escapeHTML(p.title)}</strong><span>${p.imageOnly?'Hình ảnh':'Xem video ↗'}</span></div></article>`).join('');
 if(!shown.length)grid.innerHTML='<p>Chưa có dự án thuộc nhóm này.</p>';
}
drawProjects();
document.getElementById('project-filters').addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(!button)return;const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(chip=>{const on=chip===button;chip.classList.toggle('active',on);chip.setAttribute('aria-pressed',String(on))});drawProjects(filter)});
const dialog=document.getElementById('video-dialog');const stage=document.getElementById('video-stage');const caption=document.getElementById('video-caption');
grid.addEventListener('click',event=>{const target=event.target.closest('[data-project]');if(!target)return;const p=projects[Number(target.dataset.project)];if(!p)return;caption.textContent=p.title;if(p.imageOnly){stage.innerHTML=`<img src="${BASE+encodeURI(p.image)}" alt="${escapeHTML(p.title)}">`}else{stage.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(p.video)}?autoplay=1&rel=0" title="${escapeHTML(p.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}dialog.showModal()});
function closeVideo(){dialog.close();stage.replaceChildren()}
document.getElementById('video-close').addEventListener('click',closeVideo);
dialog.addEventListener('click',e=>{if(e.target===dialog)closeVideo()});
dialog.addEventListener('close',()=>stage.replaceChildren());
// Bản demo dùng mailto, KHÔNG giả vờ đã gửi email hoặc giữ lại khóa Web3Forms cũ.
document.getElementById('contact-form').addEventListener('submit',event=>{event.preventDefault();const name=document.getElementById('contact-name').value.trim();const message=document.getElementById('contact-message').value.trim();if(!name||!message)return;const subject=encodeURIComponent(`Liên hệ hợp tác từ ${name}`);const body=encodeURIComponent(`Xin chào Thạo,\n\n${message}\n\nTrân trọng,\n${name}`);location.href=`mailto:phamtienthao88@gmail.com?subject=${subject}&body=${body}`});