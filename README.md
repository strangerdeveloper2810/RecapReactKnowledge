## Recap ReactJS Knowledge

## ==================================================================== ##
## PureComponent

## Lưu ý:  Chỉ sử dụng PureComponent, không nên lạm dụng vì có thể dẫn tới lỗi, Bản chất của PureComponent là tự động kiểm tra xem nếu props và state của component đó thay đổi thì sẽ render lại, không thì thôi. Nhưng sự so sánh thay đổi của react là sự so sánh tham chiếu (Shallow comparison - so sánh nguyên thủy), nếu như ta truyền một object dưới dạng props, và thay đổi 1 thuộc tính nào đó thì react sẽ không so sánh được, vì căn bản là cùng 1 object.

## ==================================================================== ##


## ==================================================================== ##

## - Vẫn là câu chuyện quản lý state. Khi component phân cấp quá nhiều, việc xác định nơi lưu trữ state và nơi làm thay đổi state khi component thay đổi dẫn đến việc truyền props trở nên rườm rà và phức tạp. Dữ liệu được truyền qua props theo hình thức: cha -> con, annh -> em, ông nội -> cha -> con,....


## - Tương tự redux thằng react-context ra đời cũng nhằm để giải quyết vấn đề đó.

## - Context chia sẻ dữ liệu cho nhiều các component khác nhau tương tự Redux (theo 1 góc nhìn nào đó redux khá giống nhau chúng đều quản lý state tập trung rồi phân phối cho các component)

## - Context có 2 thành phần: Provider và Consumer. Trong đó Provider đóng vai trò là component quản lý các state sử dụng chung cho các component được nó bao phủ, Consumer đóng vai trò truy xuất dữ liệu từ state chứa trong Provider



