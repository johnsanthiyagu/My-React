import React from "react";
import Database from "./Database";
// import { Data } from "./Database";

const Show = () => {
//   function Coreconcept({ title, price, model }) {
//     return (
//       <>
//         <div>
//           <h1 className="text-amber-500 text-2xl">{title}</h1>
//           <p>{price}</p>
//           <p>{model}</p>
//         </div>
//       </>
//     );
//   }
  return (
    <>
      <div>
        {/* <Coreconcept
          title={Data[0].name}
          price={Data[0].price}
          model={Data[0].model}
        />
         */}
         <Database/>
      </div>
    </>
  );
};

export default Show;
