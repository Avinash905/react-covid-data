import "./App.css";
import React from "react";
import Table from "./Table";

function App() {
  return (
    <div className="container ">
      <h1 className="text-center mx-auto my-3 bg-secondary py-2 rounded text-white w-25">
        Covid 19 Data
      </h1>
      <Table />
    </div>
  );
}

export default App;
