import React from "react";
// border-r-green-700
// border-r-red-700

function History({ transactionList }) {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold border-b-2 pb-2 mb-4">History</h3>
        <div className="flex flex-col h-[164px] overflow-y-scroll">
          {/* Ta xét height = 164px và overflow-y-scoll: để hiển thị set khung cố định và hiện thanh scroll dọc (trục y) */}
          {/*  Convert chuỗi sang số
              - ép kiểu
              - nhân vs 1
              - bỏ dấu cộng phía trước 
              */}
          {transactionList.map((trans, index) => {
            if (+trans.amount >= 0) {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between w-full drop-shadow-lg bg-white p-2 mb-4 border-r-8 border-r-green-700"
                >
                  <p className="text-lg">{trans.text}</p>
                  <div className="text-lg">$ +{trans.amount}</div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between w-full drop-shadow-lg bg-white p-2 mb-4 border-r-8 border-r-red-700"
                >
                  <p className="text-lg">{trans.text}</p>
                  <div className="text-lg">$ {trans.amount}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default History;
