- Flex = Flexible box moudule

#

\*Các thuộc tính trong nhóm flex
display: flex | inline-flex kích hoạt flex

flex-direction chọn trục cho flex
row: nằm ngang
row-reverse: nằm ngang đảo ngược
column: nằm dọc
column-reverse: nằm dọc đảo ngược

justify-content: căn chỉnh các item song song với trục chính
flex-start: nằm phía bên trái
flex-end: nằm phía bên phải
center: nằm giữa
space-around: cách lề 1/2 khoảng các từ item này sang item khác
space-evenly: cách bằng nhau cả lề với các item
space-between: lề dính sát lại

align-items: căn chỉnh các item theo hướng vuông góc với trục chính
stretch mặc định, full chiều cao
flex-start: nằm trên
center: căn giữa
flex-end: nằm dưới
baseline: nằm trên khác với flex-start

flex-wrap
nowrap: mặc định
wrap: bẻ xuống
wrap-reverse

align-content: căn chỉnh hàng cột--> chỉ áp dụng khi có nhiều hàng và nhiều cột
atrretch
flex-start
flex-end
center
space-around
space-between
space-evenly

gap: 10px 20px: item cột cách nhau 20px,
cách dòng 10px

#

\*các thuộc tính trong flex item
-flex-grow: dãn các item để lấp đầy khoảng trống cần cách
-flex-shrink: tự động co lại các item
-flex-basis thiết lập kích thước ban đầu cho các item

- ==>flex: grow shrink basis (gộp)

  -align-self căn chỉnh 1 item
  stretch mặc định, full chiều cao
  flex-start: nằm trên
  center: căn giữa
  flex-end: nằm dưới
  baseline: nằm trên khác với flex-start

  -order: sắp xếp thứ tự các item
  Nhận số nguyên
