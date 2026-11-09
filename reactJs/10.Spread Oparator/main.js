//--Tác dung:
//  Trãi các phần tử của 1 mảng thành các phần tử riêng lẻ
//  Trãi các cặp Key - Value trong 1 đối tượng để kết hợp hoặc sao chép
// -- Thường được dùng để
// Gộp (merge) dữ liệu
// Sao chép mảng hoặc đối tượng
//Thêm dữ liệu mới 1 cách linh hoạt

//ARRAY
let soThich = ["đọc sách", "nghe nhạc"];
const soThichMoi = "Đi du lịch";
soThich = [...soThich, soThichMoi, "abc"];
console.log(soThich);

//OBJECT
let user = {
  id: 1,
  name: "Nhu xinh",
  mail: "nhu@123.com",
};

const updates = {
  address: "Thu Duc HCM",
  role: "admin",
};

user = { ...user, ...updates };
console.log(user);
