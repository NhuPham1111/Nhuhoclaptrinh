import Book from "./Book";

const myBook = ["Sach hay", "Ki nang lap trinh", "Ki nang song", "Du lich"];
function App() {
  return (
    <>
      <h1>Danh sach sach yeu thich</h1>
      <ul>
        {myBook.map((book, index) => {
          return <Book title={book} key={index} />;
        })}
      </ul>
    </>
  );
}

export default App;
