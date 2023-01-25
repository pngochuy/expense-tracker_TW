import React from "react";

function Balance({ transactionList }) {
  /* CÁCH 1 (Thắng): Tính balance, income, expense */
  let income = 0;
  let expense = 0;
  for (let transaction of transactionList) {
    if (+transaction.amount > 0) {
      income = +transaction.amount + income;
    } else {
      expense = +transaction.amount + expense;
    }
  }
  /* CÁCH 2 (Huy): Tính balance, income, expense */
  // Lọc object có tiền (+)
  const incomeTotal = () => {
    const income = transactionList.filter((trans) => {
      return trans.amount > 0;
    });
    let sum = 0;
    for (let i = 0; i < income.length; i++) {
      sum += parseFloat(income[i].amount);
    }
    return sum;
  };
  // Lọc object có tiền (-)
  const expenseTotal = () => {
    const expense = transactionList.filter((trans) => {
      return trans.amount < 0;
    });
    let sum = 0;
    for (let i = 0; i < expense.length; i++) {
      sum += parseFloat(expense[i].amount);
    }
    return sum;
  };
  // Tính Balance = INCOME - EXPENSE
  const balanceTotal = () => {
    // return incomeTotal() - expenseTotal();
    return incomeTotal() + expenseTotal();
  };
  return (
    <>
      <div className="">
        <p className="text-md">YOUR BALANCE</p>
        <div className="flex flex-row">
          <span className="text-2xl font-bold">$</span>
          {/* Balance = INCOME - EXPENSE */}
          <div className="text-2xl font-bold">{income + expense}</div>
        </div>
      </div>
      <div className="w-full drop-shadow-lg bg-white p-4 flex flex-row my-4">
        <div className="w-1/2 flex flex-col items-center text-green-700 border-r-2">
          <p className="text-lg">INCOME</p>
          <div className="flex flex-row">
            <span className="text-2xl font-bold">$</span>
            {/* INCOME TOTAL (+) */}
            <div className="text-2xl font-bold">{income}</div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center text-red-700">
          <p className="text-lg">EXPENSE</p>
          <div className="flex flex-row">
            <span className="text-2xl font-bold">$</span>
            {/* EXPENSE TOTAL (-) */}
            <div className="text-2xl font-bold">{-expense}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
