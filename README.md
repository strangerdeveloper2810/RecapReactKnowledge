## Recap ReactJS Knowledge
## PureComponent

## Lưu ý:  Chỉ sử dụng PureComponent, không nên lạm dụng vì có thể dẫn tới lỗi, Bản chất của PureComponent là tự động kiểm tra xem nếu props và state của component đó thay đổi thì sẽ render lại, không thì thôi. Nhưng sự so sánh thay đổi của react là sự so sánh tham chiếu (Shallow comparison - so sánh nguyên thủy), nếu như ta truyền một object dưới dạng props, và thay đổi 1 thuộc tính nào đó thì react sẽ không so sánh được, vì căn bản là cùng 1 object.
