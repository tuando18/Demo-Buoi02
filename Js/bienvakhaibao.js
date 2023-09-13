console.log("Demo đặt tên biến");

// Demo cách đặt tên biến
// Theo js coding  convention
// Thì khuyến khích đặt tên biến theo lowerCameCase
let tenTruong = "FPT Poly";
let tenLop = "Js cơ bản";
console.log(tenTruong);
console.log(tenLop);

// Cách đặt tên biến khác
let ten_truong = "FPT HN"
let ten_truong_02 = "FPT Poly 02"
console.log(ten_truong);
console.log(ten_truong_02);

// Các cách khai báo biến
console.log("Demo cách khai báo biến");
// có 3 cách khai báo biến
// 1. const Dùng để khai báo hằng số. Biến có giá trị không thay đổi
// 2. let  Dùng để khai báo biến cục bộ. Có phạm vi trong scope{}
// 3. var Dùng để khai báo biến toàn cục. Có phạm vi toàn bộ file

console.log("Demo dùng const");
const bienHangSo = "Phụ nữ luôn đúng";
console.log(bienHangSo);
// bienHangSo = "Phụ nữ có thể sai"; // câu lệnh sai ko gán đc cho const

console.log("Demo dùng let");
{
    let bienCucBo01 = "Đây là biến cục bộ"
    console.log(bienCucBo01);
}

console.log("Demo dùng var");
{
    var bienToanCuc01 = "Đây là biến toàn cục 01";
    console.log(bienToanCuc01);
}
console.log(bienToanCuc01);

// Lưu ý:
// 1. Nên đặt tên biến theo js 
// 2. Hãy dùng const khi biến có giá trị không đổi 
// 2. Nên dùng let nhiều nhất có thể
// 4. Chỉ dùng var khi không dùng được let