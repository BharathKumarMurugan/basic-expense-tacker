import React, { useContext, useState } from "react";
import Button from "../inputElements/Button";
import Input from "../inputElements/Input";
import { WalletContext } from "../WalletContext";
import "./form.css";

function Form() {
  const { amtValue, logValue } = useContext(WalletContext);
  const [amount, setAmount] = amtValue;
  const [logs, setLogs] = logValue;

  const [money, setMoney] = useState("");

  const currentTime = () => {
    return new Date().toISOString();
  };

  const addEntryToLogs = (actionType) =>
    setLogs([
      ...logs,
      {
        timestamp: currentTime(),
        amount: parseInt(money),
        action: actionType,
      },
    ]);

  const addMoneyToWallet = (e) => {
    e.preventDefault();
    setAmount(() => parseInt(amount) + parseInt(money));
    addEntryToLogs("Add");
    setMoney("");
  };

  const removeMoneyFromWallet = (e) => {
    e.preventDefault();
    setAmount(() => parseInt(amount) - parseInt(money));
    addEntryToLogs("Remove");
  };

  return (
    <div className="card-body__form">
      <div className="card-title__form-title">
        <h4>{`Balance : INR ${amount}`}</h4>
      </div>
      <form>
        <div className="card__form-input">
          <Input
            name="expense-tracker-input"
            type="number"
            placeholder="Enter amount"
            min="0"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            required={true}
          />
        </div>
        <div className="card__form-btn">
          <Button
            name="expense-tracker-add-btn"
            className="btn"
            type="submit"
            value="Add"
            onClick={addMoneyToWallet}
          />
          <Button
            name="expense-tracker-remove-btn"
            className="btn"
            type="submit"
            value="Remove"
            onClick={removeMoneyFromWallet}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
