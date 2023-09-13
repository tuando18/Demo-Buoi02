console.log("\tDemo number");
// Khai báo
let namSinh = 2004;
let diemSo = 9.9;

console.log(namSinh);
console.log(diemSo);

// Demo isNaN
let namSinhString = "Hai Không Bốn"; // biến string
console.log(isNaN(namSinh)); // KQ: false
console.log(isNaN(namSinhString)); // KQ: true


// Demo typeof. Để in ra kiểu dữ liệu của biến
console.log("\tDemo typeof");
console.log(typeof(namSinh));
console.log(typeof(namSinhString));
console.log(typeof("2004"));

// Demo ép kiểu chuỗi thành số

let bienTuoi = "18";
console.log(typeof(bienTuoi)); // string
console.log(typeof(Number(bienTuoi))); // number