import React, { useState } from "react";

const Random = () => {
  const [typrofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleGenerateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[RandomUtility(hexColor.length)];
      setColor(hexColor);
    }
    console.log("hexcolor : ", hexColor);
  }
  function RandomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRGBColor() {
    const r = RandomUtility(256);
    const g = RandomUtility(256);
    const b = RandomUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div>
      <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
        <div className="flex justify-center items-center text-white ">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="px-4 py-3 border-2 border-red-500"
          >
            CreateHexColor
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="px-4 py-3 border-2 border-red-500"
          >
            CreateRgbColor
          </button>
          <button
            onClick={
              typrofColor === "hex"
                ? handleGenerateHexColor
                : handleGenerateRGBColor
            }
            className="px-4 py-3 border-2 border-red-500"
          >
            GenerateRendomColor
          </button>
        </div>
        <div className="text-lg text-white font-semibold">
          {typrofColor === "hex" ? "HEX" : "RGB"}
          <div>{color}</div>
        </div>
      </div>
    </div>
  );
};

export default Random;
