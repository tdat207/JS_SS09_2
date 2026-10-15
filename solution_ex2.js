const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9,
  discountCode: "SUMMER10"
};

const isVoucherValid = false;

const priceKey = "roomPrice";
// diem sai: trong obj k cs key ten priceKey nen gia tri tra ve la undefind
// cách sửa: thay dấu . thành [] để đọc giá trị chuỗi lưu trong priceKey
const basePrice = bookingReservation[priceKey];

let earlySurcharge = 0;
if (bookingReservation.checkInHour < 12) {
  earlySurcharge = basePrice * 0.3;
  bookingReservation.earlySurcharge = earlySurcharge;
}

const totalAmount = basePrice + earlySurcharge;
bookingReservation.totalAmount = totalAmount;

if (!isVoucherValid) {
    // diem sai: gán undefind chỉ xóa giá trị, còn discountCode vẫn còn trong obj. khi kiểm tra thì 'discountCode' in bookingReservation vẫn ra true và hiện ra màn hình vẫn là discountCode: underfined
    // cách sửa: dùng toán tử delete để xóa key và value khỏi vùng nhớ obj
  delete bookingReservation.discountCode;
}

console.log("--- CHI TIẾT PHIẾU ĐẶT PHÒNG ---");
for (const key in bookingReservation) {
    // diem sai:biến key trong for in là biến đại diện. khi viết .key trong js thì nó lại hiểu là đi tìm thuộc tính tên là chữ key nên tất cả thông tin in ra màn hình là underfined
    // cách sửa: đặt biến vào ngoặc vuông để lấy giá trị của từng thuộc tính qua mỗi vòng lặp. cách sửa đúng nhât là thay . thành []
  console.log(key + ": " + bookingReservation[key]);
}

// Kiểm tra lại điều kiện bài toán
console.log("discountCode còn tồn tại không?:", 'discountCode' in bookingReservation); // false