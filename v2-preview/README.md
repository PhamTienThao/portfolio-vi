# Thạo Video Editor — bản xem thử giao diện 2.0

## Đây là gì?

Bản giao diện thử nghiệm HTML / CSS / JavaScript xây dựng theo ảnh mẫu 4 trang người dùng cung cấp. Chưa sửa hoặc triển khai vào repository GitHub gốc. Nội dung được đối chiếu với mã nguồn công khai `PhamTienThao/portfolio-vi`.

## Xem thử

Mở `index.html` bằng trình duyệt. Nên dùng Live Server hoặc một máy chủ tĩnh vì đây là sản phẩm web; ví dụ Python: `python -m http.server 8080`, mở `http://localhost:8080`.

Có bốn khu vực điều hướng theo hash: `#home`, `#about`, `#projects`, `#contact`. Responsive cho điện thoại, tablet và desktop. Bộ lọc dự án dùng video thật, bấm vào thumbnail sẽ mở YouTube nhúng. Dùng phím Esc hoặc nút × để đóng.

## Những gì đã làm

- Thay giao diện tối/cam, navbar 4 trang, typography lớn, các thẻ bo góc, chuyển động nhẹ.
- Ba ảnh nhân vật được trích và xử lý từ **ảnh tham chiếu người dùng cung cấp** để dựng demo. Đây là hình cắt từ mockup, chưa phải tài nguyên 3D độc lập chất lượng gốc; khi triển khai chính thức nên thay bằng file PNG/WebP nhân vật riêng nền trong suốt, độ phân giải cao.
- Sử dụng các dự án và link YouTube thật lấy từ `index.html` công khai của website hiện tại. 13 ví dụ; **chưa chuyển toàn bộ** thư viện.
- Sử dụng địa chỉ email, điện thoại, Facebook và đường dẫn CV trên website hiện tại.
- Bấm nút xem video: popup YouTube. Bộ lọc dự án hoạt động. Contact form demo mở ứng dụng mail, **không tự động gửi** như hệ thống Web3Forms hiện tại.

## Lưu ý trước khi triển khai chính thức

1. Sao lưu toàn bộ mã nguồn GitHub cũ và bản đang chạy.
2. Đối chiếu / import đầy đủ dữ liệu video, ảnh, gallery và metadata từ repo gốc.
3. Video thumbnail hiện lấy từ `https://phamtienthao.site/images/...`, vì vậy cần Internet và website cũ còn trực tuyến. Khi thay website chính, cần chuyển thư mục `images/` tương ứng vào bản mới hoặc cập nhật BASE trong `js/app.js`. Lý tưởng là sao chép đúng các ảnh assets để dùng URL nội bộ.
4. Gắn lại và kiểm tra biểu mẫu gửi email của phiên bản gốc, nhưng không tự chép các khóa dịch vụ từ mã nguồn công khai.
5. Kiểm thử responsive, SEO, Google Search Console, các đường dẫn và tính năng trên hosting trước khi triển khai vào domain thật.

## Cấu trúc

- `index.html`: 4 trang / navigation
- `css/style.css`: giao diện và responsive
- `js/app.js`: routes, dữ liệu demo dự án, lọc, mở video, contact mailto
- `assets/`: hình nhân vật cắt từ mockup người dùng cung cấp

Không có token, mật khẩu hoặc API key bí mật nào được thêm vào sản phẩm.