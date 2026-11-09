import "./App.css";
// import UseStateCount from "./components/UseStateCount";
// import UseEffectPractice from "./components/useEffect/UseEffectPractice";
// import UserSearchApp from "./components/useEffect/UserSerchApp";
// import UserAppFixRaceConditionByAbortController from "./components/useEffect/UserAppFixRaceConditionByAbortController";
// import UsersAppFixRaceConditionByRequestID from "./components/useEffect/UsersAppFixRaceConditionByRequestID";
// import StaleClosure from "./components/useEffect/StaleClosure";
import TestCustomHook from "./components/custormHook/TestCustomHook";
import InfiniteScroll from "./components/testUI/InfiniteScroll";
import AutoSaveInput from "./components/testUI/AutoSaveInput";

function App() {
  return (
    <>
      <div className="p-4 flex flex-col">
        <h1 className="text-3xl font-bold text-red-500">Practice Hooks</h1>
        <div>
          {/* <h1 className="text-2xl font-bold text-blue-500 pt-4">UseState</h1> */}
          {/* <UseStateCount /> */}
          {/* <h1 className="text-2xl font-bold text-blue-500 pt-4">UseEffect</h1>
          <UseEffectPractice />

          <h2 className="text-xl font-bold pt-4">2. User Serch List</h2>
          <div className="grid grid-cols-3">
            <UserSearchApp />
            <UserAppFixRaceConditionByAbortController />
            <UsersAppFixRaceConditionByRequestID />
          </div>

          <h2 className="text-xl font-bold pt-4">3. Stale closure</h2>
          <StaleClosure /> */}
          <h2 className="text-xl font-bold pt-4">4. Custom Hooks</h2>
          <TestCustomHook />
          <h2 className="text-xl font-bold pt-4">UI test</h2>
          <InfiniteScroll />
          <AutoSaveInput />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
