import React from "react";
import { useState, useEffect } from "react";

const API_URL = "https://restcountries.com/v3.1/all";
const Db = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <>
      
        <div className="flex justify-center items-center gap-12 flex-wrap ml-16 mr-16 mt-12 ">
          {data
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .slice(0, 250)
            .map((item, index) => (
              <div className="flex justify-center items-center gap-4  flex-row ">
                {" "}
                <div
                  key={index}
                  className="flex flex-col justify-center items-center w-56 h-64 bg-amber-200 rounded-3xl shadow-2xl gap-2 flex-wrap relative"
                >
                  <div className="bg-amber-950 w-12 h-12 rounded-full text-white absolute -mt-65 font-bold flex justify-center items-center">
                    <h3>{index + 1}</h3>
                  </div>
                  <img src={item.flags.svg} className="w-28 h-auto" />
                  <h2 className="text-xl font-bold text-amber-900">
                    {"  "}
                    {item.name.common}
                  </h2>
                  <p>{item.capital}</p>
                  <a
                    href={item.maps.googleMaps}
                    title={item.name.common + " map"}
                    className="text-xs text-green-700 flex-wrap"
                  >
                    map
                  </a>
                </div>
              </div>
            ))}
        </div>
     
    </>
  );
};

export default Db;
