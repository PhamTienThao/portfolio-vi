# Thạo Video Editor — Portfolio 2.0 (One-page)

Bản xem thử theo ảnh tham chiếu phong cách đen–cam. **Tất cả 4 khu vực Trang chủ → Thông tin → Dự án → Liên hệ cùng nằm trong một trang cuộn dọc**, không còn chuyển trang ẩn/hiện.

## Cách xem

Mở `index.html` bằng trình duyệt. Để xem ổn định nên dùng server tĩnh (VS Code Live Server hoặc `python -m http.server 8080`). Truy cập `http://localhost:8080`.

- Cuộn xuống tự nhiên để đọc các phần liên tiếp.
- Nhấn menu hoặc nút `Xem dự án` để cuộn mượt tới phần tương ứng (`#home`, `#about`, `#projects`, `#contact`).
- Menu luôn cố định tại đầu trang khi cuộn và tự đánh dấu mục đang xem.
- Có thanh thể hiện tiến độ cuộn, nút `↑` trở lại đầu trang.
- Trên điện thoại: menu thu gọn, hiển thị responsive.
- Bộ lọc video và cửa sổ xem video vẫn hoạt động.

## Giới hạn bản demo

- 13 dự án mẫu trích từ website hiện tại, **chưa chuyển toàn bộ** thư viện ảnh/video.
- Hình 3D được trích từ mockup tham chiếu, cần thay bằng file nhân vật độc lập chất lượng cao ở bản sản xuất.
- Thumbnail dự án đang tải từ `https://phamtienthao.site/images/...`, nên cần Internet và website hiện hành còn truy cập được.
- Form liên hệ **chỉ mở ứng dụng email** và không gửi tự động. Chưa tích hợp dịch vụ Web3Forms gốc.
- Chưa triển khai website hiện tại; nên kiểm thử đầy đủ trước khi dùng trên domain thật.

## Cấu trúc

`index.html` — 4 section của one-page. `css/style.css` — phong cách và responsive. `js/app.js` — theo dõi cuộn, điều hướng, dự án, popup video, mailto. `assets/` — hình nhân vật cắt từ mockup.

Không có token, mật khẩu hoặc API key bí mật trong bản demo.
