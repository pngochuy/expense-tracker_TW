import { useRef, useState, useEffect } from "react";
import Add from "./components/Add";
import Balance from "./components/Balance";
import History from "./components/History";

function App() {
  // Lưu từng Object (text, amout) riêng lẻ khi nhấn Add vào Mảng "transactionList" chung để dễ sau này liên kết/sử dụng vs Components con khác
  const [transactionList, setTransactionList] = useState(
    JSON.parse(localStorage.getItem("transactionList")) ?? []
  );
  // console.log(transactionList);
  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
    // lưu Object hoặc Array ta có thể convert sang Json dạng String
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
          {/* render History */}
          <Add
            // setTransactionList={(newTrans) => {
            //   setTransactionList([...transactionList, newTrans]);
            // }}
            setTransactionList={(newTrans) => {
              setTransactionList([newTrans, ...transactionList]);
            }}
            // Đảo ngược để khi render sẽ xuất hiện phía trên (thay vì phía dưới như cũ)
            transactionList={transactionList}
            // hàm setTransactionList nhận đối số "newTransaction" (của bên file Add.js, cụ thể là khi nhấn Click button nó sẽ truyền tham số qua đây) rồi nó thực hiện rải qua từng ptử của "transactionList"
          ></Add>
        </div>
      </div>
    </>
  );
}

export default App;
