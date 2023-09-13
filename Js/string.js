console.log("\tDemo về string");
//Khai báo string
let bienString01 = "Đây là String 01";
let bienString02 = 'Đây là String 02';
let bienString03 = `Đây là String 03`;
let bienString04 = "String";
let bienString05 = `Đây là biến ${bienString04} 05`;

console.log(bienString01);
console.log(bienString02);
console.log(bienString03);
console.log(bienString05);//Kq biến string 05

// Demo về khai báo string có kí tự đặc biệt

let bienString06 = "Đây là biến có kí tự \nxuống dòng";
console.log(bienString06);

// Khai báo string có kí tự ""
let bienString07 = "Tôi học ở \"FPT Poly\"";
let bienString08 = 'Tôi học ở "FPT Poly"';

console.log(bienString07);
console.log(bienString08);

// Giới thiệu thuộc tính và phương thức string
// Thuộc tính <> Phương thức

let bangChuCai = "abcdefhk";
console.log(bangChuCai);
// Thuộc tính lenght. Dùng để in ra độ dài số kí tự của string
console.log(bangChuCai.length);

// Phương thức uppercase
console.log(bangChuCai.toUpperCase()); // IN RA CHỮ IN HOA

// Phương thức trim(). Dùng để xóa kí tự xóa khoảng trắng đầu cuối
let username = " dvtuan ";
console.log(username.trim());

// Phương thức charAt. Dùng để lấy ra kí tự tại vị trí index
console.log(bangChuCai.charAt(0));
console.log(bangChuCai.charAt(1));
console.log(bangChuCai.charAt(2));
console.log(bangChuCai.charAt(3));
console.log(bangChuCai.charAt(4));

// Phương thức substring. Dùng để cắt chuỗi thành chuổi nhỏ hơn
console.log(bangChuCai.substring(1,3));

// substr: cắt từ kí tự A thêm B kí tự nữa
console.log(bangChuCai.substr(1,3));

// Demo nối chuỗi, nối string
console.log("\tDemo nối chuỗi, nối string");

let bienHo = "Do";
let bienTenDem = "Van";
let bienTen = "Tuan";
console.log(bienHo.concat(" ",bienTen));
console.log(bienHo + " " + bienTen);