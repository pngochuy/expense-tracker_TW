import { useRef, useState, useEffect } from "react";
import Add from "./components/Add";
import Balance from "./components/Balance";
import History from "./components/History";

function App() {
  const [transactionList, setTransactionList] = useState(
    JSON.parse(localStorage.getItem("transactionList")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
  }, [transactionList]);

  return (
    <>
      <div className="w-screen ">
        <div className="w-[32rem] mx-auto">
          <h1 className="text-center font-bold text-3xl my-4">
            Expense Tracker
          </h1>
          <Balance transactionList={transactionList}></Balance>
          <History transactionList={transactionList}></History>
          <Add
            setTransactionList={(newTrans) => {
              setTransactionList([newTrans, ...transactionList]);
            }}
            transactionList={transactionList}
          ></Add>
        </div>
      </div>
    </>
  );
}

export default App;
