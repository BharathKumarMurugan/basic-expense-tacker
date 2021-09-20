import React from "react";
import Form from "./Form/Form";
import "./app.css";
import { WalletProvider } from "./WalletContext";
import Logs from "./Transaction/Logs";
import Button from "./inputElements/Button";

function App() {
  const handleReload = () =>{
    window.location.reload(false);
    localStorage.clear();
  }
  return (
    <WalletProvider>
      <div id="section">
        <div id="section__expense-tracker" className="card">
          <div className="card-title">
            <h2>Expense Tracker - Basic</h2>
          </div>
          <div className="card-body">
            <div className="card card__form">
              <Form />
            </div>
            <div className="card card__logs">
              <Logs />
            </div>
          </div>
        </div>
        <Button type="submit" className="btn" value="Clear & Reload" onClick={handleReload} />
      </div>
    </WalletProvider>
  );
}

export default App;
