import { useRef, useState } from "react";
// { functionOnChange, functionAddItem, iref, ivalue }

function Add({ setTransactionList, transactionList }) {
  //              state              function
  const [newTransaction, setNewTransaction] = useState({
    text: "",
    amount: "",
  });
  const inputRefText = useRef();
  const inputRefAmount = useRef();

  const handleOnChangeText = (e) => {
    // setInputValueText(e.target.value);
    // console.log(e.target.value);
    // setInputValue(e.target.value);
    // if (typeof(e.target.value) === typeof(Number)) {}
    setNewTransaction({
      ...newTransaction,
      text: e.target.value,
    });
  };
  const handleOnChangeAmount = (e) => {
    // setInputValueAmount(e.target.value);
    // console.log(e.target.value);
    // setInputValue(e.target.value);
    setNewTransaction({
      ...newTransaction,
      amount: e.target.value,
    });
  };

  const handleAddTrans = () => {
    if (newTransaction.text !== "" && newTransaction.amount !== "") {
      setTransactionList(newTransaction);
      // console.log(newTransaction);

      setNewTransaction({
        ...newTransaction,
        text: "",
        amount: "",
      });

      inputRefText.current.focus();
    } else {
      alert("You enter nothing!");
    }
  };

  const handlePressEnter = (e) => {
    if (e.code === "Enter") {
      handleAddTrans();
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold border-b-2 pb-2 mb-4">
          Add new transaction
        </h3>
        <div className="flex flex-col mb-2">
          <p className="text-lg font-bold mb-2">Text</p>
          <input
            placeholder="Enter text..."
            className="p-2 border-2 border-slate-200 outline-none"
            onChange={(e) => {
              handleOnChangeText(e);
            }}
            // onChange={(e) => {
            //   setNewTransaction({
            //     ...newTransaction,
            //     text: e.target.value,
            //   });
            // }}
            ref={inputRefText}
            value={newTransaction.text}
            onKeyDown={(e) => handlePressEnter(e)}
          ></input>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-bold mb-2">
            Amount <br></br> (negative - expense, postive - income)
          </p>
          <input
            placeholder="Enter amount..."
            className="p-2 border-2 border-slate-200 outline-none"
            onChange={(e) => {
              handleOnChangeAmount(e);
            }}
            // onChange={(e) => {
            //   setNewTransaction({
            //     ...newTransaction,
            //     amount: e.target.value,
            //   });
            // }}
            ref={inputRefAmount}
            value={newTransaction.amount}
            onKeyDown={(e) => handlePressEnter(e)}
          ></input>
        </div>
      </div>
      <button
        className="bg-black text-white text-center w-full py-2 mt-4"
        // onClick={handleAddItem}
        // onClick={() => transactionList(newTransaction)}
        onClick={() => handleAddTrans()}
        // Khi t click thì nó gọi props rồi nhận
      >
        Add transaction
      </button>
    </>
  );
}

export default Add;
