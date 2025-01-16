import { useState } from "react";
import VisaComponent from "./Component/VisaComponent";
import TableStatus from "./Component/TableStatus";

function App() {
  const [checked, setChecked] = useState("visa");

  return (
    <>
      <div className="main-btn">
        <button
          className={checked === "visa" ? "active" : ""}
          onClick={() => setChecked("visa")}
        >
          Visa
        </button>
        <button
          className={checked === "status" ? "active" : ""}
          onClick={() => setChecked("status")}
        >
          Issued Cards
        </button>
      </div>
      {checked === "visa" && <VisaComponent />}
      {checked === "status" && <TableStatus />}
    </>
  );
}

export default App;
