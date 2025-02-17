import React from "react";

const Database = () => {
  const Data = [
    {
      id: 1,
      name: "Acer",
      price: 300000,
      model: "Aspire 2025",
    },
    {
      id: 2,
      name: "Dell",
      price: 200000,
      model: "Inspiron 2025",
    },
    {
      id: 3,
      name: "Lenovo",
      price: 150000,
      model: "Think Pad 2025",
    },
    {
      id: 4,
      name: "Apple",
      price: 500000,
      model: "Macbook pro 2025",
    },
  ];
  return (
    <>
      <div>
        <p>ID: {Data[0].id}</p>
        <h1> Name: {Data[0].name}</h1>
        <p className="text-green-500"> Price: ${Data[0].price}</p>
        <p className="text-amber-300"> Model: {Data[0].model}</p>
      </div>

      <p>{...Data[1]}</p>
    </>
  );
};

export default Database;
