import { useState } from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import { myData, EXAMPLES } from "../data.js";
import TabButton from "./components/TabButton.jsx";
// import { func } from "prop-types";
// import { build } from "vite";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [isActive, setIsActive] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  let tabContent = <p>Vui lòng click vào nút để chọn Topic muốn xem</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tabContent">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code></code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedTopic) {
    // alert(`${selectedButton} được chọn`);
    setSelectedTopic(selectedTopic);
  }
  function handleClickActive() {
    setAlertVisible(true);
  }
  function handleConfirm() {
    setAlertVisible(false);
    setIsActive(true);
  }
  function handleCancel() {
    setAlertVisible(false);
    setIsActive(false);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}

          {!isActive && !alertVisible && (
            <button onClick={handleClickActive}>Active</button>
          )}
          {alertVisible && (
            <div>
              <h2>Warning!</h2>
              <p>Are you sure you want to activate this mode?</p>
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          )}
          {isActive && <h3>Mode Activated!</h3>}
          <menu>
            <TabButton
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {/* {selectedTopic} */}

          {/* Cách 1: dùng toán tử 3 ngôi */}
          {/* {!selectedTopic ? (
            <p>Vui lòng click vào nút để chọn Topic muốn xem</p>
          ) : (
            <div id="tabContent">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code></code>
              </pre>
            </div>
          )} */}

          {/* Cách 2: su dung toan tu && */}
          {/* {!selectedTopic && (
            <p>Vui lòng click vào nút để chọn Topic muốn xem</p>
          )} */}
          {/* {selectedTopic && (
            <div id="tabContent">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code></code>
              </pre>
            </div>
          )} */}
          {/* Cach 3 */}
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
