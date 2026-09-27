let rawCode = " med-rhm-0815-bhyt ";
let rawCodeError = " abc-rhm-0815 ";

let code = rawCode.trim().toUpperCase();
let isValid = code.startsWith("MED-");

let departmentCode = code.slice(4, 7);
let orderNumber = code.slice(8, 12);

let departmentName = "Không xác định";

if (departmentCode === "RHM") {
    departmentName = "Răng Hàm Mặt";
} else if (departmentCode === "TAI") {
    departmentName = "Tai Mũi Họng";
} else if (departmentCode === "MAT") {
    departmentName = "Mắt";
}

let hasBHYT = code.includes("BHYT");

let basePrice = 150000;
let finalPrice = hasBHYT ? basePrice * 0.2 : basePrice;

let line = "=".repeat(35);

if (isValid) {
    console.log(line);
    console.log(`MÃ: ${code}`);
    console.log(`KHOA: ${departmentName}`);
    console.log(`STT: ${orderNumber}`);
    console.log(`BHYT: ${hasBHYT ? "Có" : "Không"}`);
    console.log(`GIÁ: ${finalPrice} VNĐ`);
    console.log(line);
} else {
    console.log("Mã không hợp lệ");
}

let codeError = rawCodeError.trim().toUpperCase();
let isValidError = codeError.startsWith("MED-");

if (!isValidError) {
    console.log("Mã lỗi:", codeError);
}