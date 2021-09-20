import React, { createContext, useState, useEffect } from "react";

export const WalletContext = createContext();

export const WalletProvider = (props) => {
  const __amountData = localStorage.getItem("amount") || 0;
  const [amount, setAmount] = useState(parseInt(__amountData));

  const __transactionData =
    JSON.parse(localStorage.getItem("transactions")) || [];
  const [logs, setLogs] = useState(__transactionData);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(logs));
  }, [logs]);
  useEffect(() => {
    localStorage.setItem("amount", amount.toString());
  }, [amount]);

  return (
    <WalletContext.Provider
      value={{ amtValue: [amount, setAmount], logValue: [logs, setLogs] }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};
