## 1. Phân tích lỗi

* Kiểm tra "MED-" khi chưa chuyển sang chữ hoa → "med-" không hợp lệ
* Xử lý sai thứ tự: cần trim và toUpperCase trước rồi mới kiểm tra
* Cắt chuỗi dễ sai nếu dữ liệu chưa chuẩn hóa
* Chuỗi là immutable nên mỗi lần xử lý phải gán lại biến mới

---

## 2. Bảng Test Cases

| Trường hợp kiểm thử          | Dữ liệu đầu vào    | Kết quả sai thực tế | Kết quả đúng mong đợi |
| ---------------------------- | ------------------ | ------------------- | --------------------- |
| Có khoảng trắng + chữ thường | "  med-nhi-1024  " | Không nhận MED-     | Hợp lệ, tách đúng     |
| Chuỗi đúng chuẩn             | "MED-NHI-1024"     | Đúng                | Đúng                  |
| Sai prefix                   | "ABC-NHI-1024"     | Vẫn xử lý tiếp      | Báo không hợp lệ      |

---

## 3. Kết luận

* Luôn chuẩn hóa dữ liệu trước khi kiểm tra
* substring đúng vị trí chỉ khi dữ liệu đã chuẩn
* Sai thứ tự xử lý sẽ gây lỗi nghiệp vụ
