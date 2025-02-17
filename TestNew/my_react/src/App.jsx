import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Db from "./Db";
import Product from "./Product";

function App() {
  let a = 10;
  let obj = { id: 1, name: "john" };
  let arrofobj = [
    { name: "san", age: 30 },
    { name: "siva", age: 28 },
  ];

  return (
    <>
      <div>
        {/* <Db /> */}
        <Product />
      </div>
    </>
  );
}

export default App;
