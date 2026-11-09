// DESTRUCTURING ARRAY

const userName = ["Nhu", "Xinh", "Qua"];
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3);

//1. Destructuring
const [use4, user5, user6] = userName;
console.log(use4, user5, user6);

//2. Co the bo qua phan tu khong can thiet bang dau phay (,)
const [, , u8] = userName;
console.log(u8);

//3.Destructuring voi gia tri mac dinh
const [u9, u10, u11, u12 = "di"] = userName;
console.log(u9, u10, u11, u12);

//4.Destructuring voi rest parameter, co the dat ten rest = bat ki vd:abc
const [u13, ...rest] = userName;
console.log(u13);
console.log(rest);

// DESTRUCTURING OBJECT

const user = {
  name: "Nhu",
  age: 2006,
};

const ten = user.name;
const tuoi = user.age;
console.log(ten);
console.log(tuoi);

//1. Destructuring
const { name, age } = user;
console.log(name);
console.log(age);

//2. Doi tien bien (Dung alias - ten bi danh)
const { name: ten1, age: tuoi1 } = user;
console.log(ten1);
console.log(tuoi1);

//3. Destructuring voi gia tri mac dinh
const { name: ten2, age: tuoi2, gioitinh } = user;
console.log(ten2);
console.log(tuoi2);
console.log(gioitinh); //undefine

//4. Destructuring voi rest parameter
const { name: ten3, ...rest1 } = user;
console.log(ten3);
console.log(rest1);
