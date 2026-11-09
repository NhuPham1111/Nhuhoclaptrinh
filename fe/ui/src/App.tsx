import "./App.css";
// import { UserProfile } from "./ui1_UserCard/UserProfile";
// import JobList from "./ui2_JobList/JobList";
// import UserList from "./ui5_UserList/UserList";
// import Notification from "./ui6_Notification/Notification";
// import Subscriptions from "./ui7_Subscriptions/Subscriptions";
import JobPosition from "./ui8_JobPosition/JobPosition";
// import AccountList from "./ui9_AccountList/AccountList";

function App() {
  return (
    <>
      <div className="flex flex-col gap-5 h-screen w-full bg-blue-100 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* <UserProfile /> */}
          {/* <UserList /> */}
          {/* <Notification /> */}
          {/* <Subscriptions /> */}
          <JobPosition />
          {/* <AccountList /> */}
        </div>
      </div>
    </>
  );
}

export default App;
