import React, { useContext } from "react";
import { WalletContext } from "../WalletContext";
import "./logs.css";

function Logs() {
  const { logValue } = useContext(WalletContext);
  const [logs, setLogs] = logValue;
  const renderLogs = () => {
    return logs.map((log) => (
      <li key={log.timestamp}>
        {log.timestamp} - {log.amount} - {log.action}
      </li>
    ));
  };
  return (
    <div className="card-body__logs">
      <h5 className="card__logs-title">Transactions: </h5>
      <ul>{renderLogs()}</ul>
    </div>
  );
}

export default Logs;
