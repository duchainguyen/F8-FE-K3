call API
-fetch()
-axios lib
-xhr
=> phát sinh nhiều vấn đề
-rối khó bảo trì nâng cấp
-cần thêm các tác vụ khác: thêm header
-giả sử fetch()-> k đc phép sử dụng => sửa lại từng file
->giải pháp:
-tách nhiệm vụ call API thành 1 hàm riêng

##authentication
cho biết bạn là ai?
đăng nhập

luồng request: đăng nhập => server verify => khởi tạo mã số

##authorization
ủy quyền
cho phép được làm gì? không được làm gì
server: kiểm tra mã số hợp lệ hay k?

không hợp lệ: trả về thông báo lỗi(401)
hợp lệ: xử lý nghiệp vụ tiếp theo

vidu:
đăng nhập: authentication
sửa thông tin tài khoản authorization

##các hình thức authentication

1. session-based (cookie-based)
   ưu điểm:
   dễ triển khai
   các frammework, thư viện, cms từ trước đa số theo cơ chế này
   nhược điểm:
   k scale được
   không áp dụng cho các ứng dụng đa nền tảng

vd1: 1 dự án có nhiều server
request: LB =>
-server 1: login lưu session vào server này
-server 2: không có session-> băt đăng nhập lại
-server 3:

2.token-based
