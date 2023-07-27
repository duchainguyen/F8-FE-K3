#ngôn ngữ tiền xử lý SCSS

1. Cài nodeJS
   2.Cài đặt SASS

## câu lệnh biên dịch từ scss sang scc

1. biên dịch cả folder scss sang css
   sass folder_scss : foldercss

2. watch mode
   khi lưu lại scss thì sẽ tự động chạy cập nhật sang css
   câu lệnh: sass folder_scss:foldercss --watch
   ==>sa

3.biên dịch 1 file scss sang 1 file css
câu lệnh: sass duong-dan-file-scss duong-dan-file-css
sass scss/ex01.scss build/style.css
==>watch Mode tương tự như trên

4. Nén file css từ file scss
   ==> tạo ra file .min (minify)
   sass duong-dan-file-scss duong-dan-file-css --style compressed
   sass scss/ex01.scss build/style.min.css --style compressed
   ==>tạo để chuyển tất cả chúng thành 1 dòng gọi là(minify)

<!-- Biến trong scss -->

cú pháp :$tenbien
