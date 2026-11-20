import { useState } from "react";
import { TemperatureInput } from "./components/TemperatureInput";
import { TemperatureDisplay } from "./components/TemperatureDisplay";
import { Notify } from "./components/Notify";
import UserList from "./components/UserList";
import Test from "./components/Test";
import { lazy, Suspense } from "react";

export default function MyApp() {
  const [temperature, setTemperature] = useState("100");
  const [message, setMessage] = useState("No message");
  const [users, setUsers] = useState<Parameters<typeof UserList>[0]["users"]>(
    [],
  );
  console.log("Ami di hoc ");
  const TestPage = lazy(() => import("./components/Test.tsx"));

  return (
    <>
      {/* <Suspense fallback="Loading...">
        <TemperatureInput value={temperature} onChange={setTemperature} />
      </Suspense>
      <TemperatureDisplay temperature={temperature} />
      <Suspense fallback="Calback message...">
        <Notify onNotify={setMessage} />
        {message && (
          <p role="status">
            {message} hien tai la {temperature}
          </p>
        )}
      </Suspense> */}
      {/* <UserList users={users} onload={setUsers} />; */}
      <Suspense fallback={<p>Loading...</p>}>
        <TestPage />
      </Suspense>
    </>
  );
}
