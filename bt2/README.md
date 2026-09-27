# BAO CAO PHAN TICH VA SUA LOI MA NGUON

## 1. PHAN TICH LOI KY THUAT

### Bai toan 1: Sua loi cat chuoi ma van don (solution_ex1.js)
- Loi kiem tra tien to: Chuong trinh goi ham kiem tra chuoi bat dau bang "MED-" tren chuoi chua chuyen thanh chữ hoa ("med-nhi-1024"), dan den ket qua dung/sai bi phan phan phat loi (tra ve false).
- Loi chi so cat khoa (departmentCode): Lenh slice(4, 7) cat tu index 4 den 6, thu duoc "nhi". Phep cat nay phu thuoc vi tri co dinh.
- Loi chi so cat so thu tu (appointmentNumber): Lenh slice(8, 12) thuc hien tren chuoi "med-nhi-1024" bi cat thieu ky tu cuoi, chi lay duoc "102" thay vi "1024". Do ky tu thu 4 nam o index 11, tham so thu hai cua lenh slice phai la 12 de lay du ca 4 ky tu.
- Khai bao du thua: Khai bao ca isValidPrefix va isCodeValid gay du thua ma va khong tai su dung.

### Bai toan 2: Sua loi chuoi CSV va tinh bat bien (solution_ex3.js)
- Loi tinh bat bien cua chuoi (String Immutability): Cac lenh rawTicketCode.trim() va rawTicketCode.toUpperCase() khong lam thay doi chuoi goc. Do khong gan ket qua tra ve vao bien moi, bien rawTicketCode van giu nguyen gia tri tho ban dau la "   med-card-0428-ut   ".
- Loi kiem tra tien to: Lenh startsWith("MED-") tra ve false do kiem tra tren chuoi goc chua xoa khoang trang va chua viet hoa.
- Loi cat ma khoa: Lenh slice(4, 7) thuc hien tren chuoi goc chua trim() nen cat sai vi tri thanh "med" thay vi "CARD".
- Loi kiem tra uu tien: Lenh includes("-UT") tra ve false do chuoi goc mang ky tu chu thuong "-ut".
- Loi dinh dang in phieu: Lenh replaceAll("-", " | ") giu nguyen khoang trang thua hai dau, dan den dinh dang in phieu bi sai.


## 2. BANG KIEM THU (TEST CASES)

### Bang kiem thu cho Bai toan 1 (solution_ex1.js)

Truong hop 1:
- Noi dung: Cat so thu tu tiep don bi thieu ky tu
- Du lieu dau vao: "  med-nhi-1024  "
- Ket qua sai thuc te: So thu tu tiep don: 102
- Ket qua dung mong doi: So thu tu tiep don: 1024

Truong hop 2:
- Noi dung: Kiem tra tien to truoc khi viet hoa
- Du lieu dau vao: "  med-nhi-1024  "
- Ket qua sai thuc te: isValidPrefix tra ve false
- Ket qua dung mong doi: isCodeValid tra ve true

Truong hop 3:
- Noi dung: Chuoi dau vao chua khoang trang dai
- Du lieu dau vao: "    med-nhi-5678    "
- Ket qua sai thuc te: Cat sai chi so do khong trim
- Ket qua dung mong doi: Chuyen khoa: NHI, So thu tu: 5678, Trang thai hop le: true


### Bang kiem thu cho Bai toan 2 (solution_ex3.js)

Truong hop 1:
- Noi dung: Xu ly chuoi khong gan lai bien (String Immutability)
- Du lieu dau vao: "   med-card-0428-ut   "
- Ket qua sai thuc te: Ma phieu hop le: false
- Ket qua dung mong doi: Ma phieu hop le: true

Truong hop 2:
- Noi dung: Trich xuat ma khoa dieu tri
- Du lieu dau vao: "   med-card-0428-ut   "
- Ket qua sai thuc te: Khoa dieu tri: med
- Ket qua dung mong doi: Khoa dieu tri: CARD

Truong hop 3:
- Noi dung: Dinh dang chuoi in phieu nhiet
- Du lieu dau vao: "   med-card-0428-ut   "
- Ket qua sai thuc te: Chuoi in phieu:    med | card | 0428 | ut   
- Ket qua dung mong doi: Chuoi in phieu: MED | CARD | 0428 | UT


## 3. NGUYEN LY STRING IMMUTABILITY

Trong JavaScript, chuoi (String) la kieu du lieu nguyen thuy (Primitive Type) va co tinh bat bien (Immutability).

Khi mot chuoi duoc tao ra, gia tri cua no trong bo nho khong the thay doi. Cac phuong thuc xu ly chuoi nhu trim(), toUpperCase(), slice(), replaceAll() khong chinh sua chuoi goc ma luon tao va tra ve mot chuoi moi.

Do do, de luu lai ket qua sau khi xu ly, ta phai gan gia tri tra ve cua phuong thuc vao mot bien moi (hoac gan de len bien cu).

Vi du dung:
const cleanCode = rawCode.trim().toUpperCase();