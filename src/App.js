import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container con-flu">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
