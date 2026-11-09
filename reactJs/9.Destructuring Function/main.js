// Destructuring con co the duoc su dung truc tiep trong tham so(parameter) cua ham
// Giup tranh viec lap lai truy cap thuoc tinh ben trong ham.
const donHang = {
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 500000,
};

const donHang2 = {
  maDonHang: 102,
  tienTe: "VND",
  tongTien: 10000000,
};

//KHONG dung destructuring
function xuLiDonHang(donHang) {
  const maDonHang = donHang.maDonHang;
  const tienTe = donHang.tienTe;
  const tongTien = donHang.tongTien;

  console.log(`Ma don hang: ${maDonHang}`);
  console.log(`Tienn te: ${tienTe}`);
  console.log(`Tong tien: ${tongTien}`);
}
//Goi ham
xuLiDonHang(donHang);

//CO dung destructuring
console.warn("\n2.Su dung Destructuring");
function xuLiDonHang2({ maDonHang, tienTe, tongTien }) {
  console.log(`Ma don hang: ${maDonHang}`);
  console.log(`Tienn te: ${tienTe}`);
  console.log(`Tong tien: ${tongTien}`);
}
xuLiDonHang2(donHang);
xuLiDonHang2(donHang2);

console.warn("\n-------SU DUNG DESTRUCTURING VOI GIA TRI MAC DINH");
function xuLiDonHang3({ maDonHang = 0, tienTe = "USD", tongTien = 0 }) {
  console.log(`Ma don hang: ${maDonHang}`);
  console.log(`Tienn te: ${tienTe}`);
  console.log(`Tong tien: ${tongTien}`);
}
xuLiDonHang3(donHang);

// Goi ham voi du lieu thieu
xuLiDonHang2({ maDonHang: 102 });

// Su dung Rest parameter
function xuLiDonHang({ maDonHang, ...rest }) {
  console.log(`Ma don hang: ${maDonHang}`);
  console.log(rest);
}
