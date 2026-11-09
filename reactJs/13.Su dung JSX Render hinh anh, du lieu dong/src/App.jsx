import "./App.css";
import demoPic from "../src/assets/img/avatar1.jpg";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
const wellCome = [
  "Hello world!",
  "Wellcome into my React App!",
  "Let's get started right now !!!",
];

function ranDomTitleIndex() {
  return Math.floor(Math.random() * wellCome.length);
}

function Header() {
  const title = wellCome[ranDomTitleIndex()];
  return (
    <>
      <h1>{title}</h1>
      <p>
        Hôm nay là ngày: <strong>{today}</strong>. Thời gian hiên tại {""}
        <strong>{time}</strong>
      </p>
    </>
  );
}
const name = "Nhu Xinh";
let isLogIn = true;
let person = {
  name: "Như Xinh",
  age: 18,
};
function DinamicValue() {
  return (
    <>
      <h2>Chao {name}</h2>
      <p>Ket qua: {1 + 2}</p>
      <p>{isLogIn ? "Bạn đã đăng nhập" : "Hãy đăng nhập"}</p>
      <p>
        Tên: {person.name}, Tuổi: {person.age}
      </p>
      <img src={demoPic} />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <DinamicValue />
    </>
  );
}

export default App;
