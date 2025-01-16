import { useState } from "react";
import VisaComponent from "./Component/VisaComponent";
import TableStatus from "./Component/TableStatus";

function App() {
  const [checked, setChecked] = useState("visa");

  return (
    <>
      <div className="main-btn">
        <button onClick={() => setChecked("visa")}>Page 1</button>
        <button onClick={() => setChecked("status")}>Page 2</button>
      </div>
      {checked === "visa" && <VisaComponent />}
      {checked === "status" && <TableStatus />}
    </>
  );
}

export default App;
