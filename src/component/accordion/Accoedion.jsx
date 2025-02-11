import React, { useState } from "react";
import data from "./data";

const Accoedion = () => {
  const [selected, setSelected] = useState(null);

  function ShowData(dataId) {
    console.log("dataId :", dataId);
    setSelected(dataId === selected ? null : dataId);
  }
  return (
    <div className="max-w-3xl mx-auto p-5">
      {data && data.length > 0 ? (
        <div className="space-y-4">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-500"
              onClick={() => ShowData(dataItem.id)}
            >
              <h3 className="flex justify-between items-center font-semibold text-gray-800">
                {dataItem.question}
                <span className="text-xl text-gray-500">+</span>
              </h3>
              {selected === dataItem.id && (
                <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 transition-all duration-500 ease-in-out">
                  {dataItem.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 italic py-6">
          No found Data
        </div>
      )}
    </div>
  );
};

export default Accoedion;
