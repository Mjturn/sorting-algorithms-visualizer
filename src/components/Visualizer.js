import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Visualizer() {
  const [array, setArray] = useState([]);
  const [comparing, setComparing] = useState([]);
  const [sorting, setSorting] = useState(false);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateNewArray = () => {
    const newArray = Array.from({ length: 25 }, () => getRandomNumber(1, 750));
    setArray(newArray);
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  const bubbleSort = async () => {
    setSorting(true);
    let newArray = [...array];

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setComparing([newArray[j], newArray[j + 1]]);

        if (newArray[j] > newArray[j + 1]) {
          const temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
          setArray([...newArray]);
        }
      }
    }
    setComparing([]);
    setSorting(false);
  };

  const insertionSort = async () => {
    setSorting(true);
    let newArray = [...array];

    for (let i = 1; i < array.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setComparing([newArray[i], newArray[i - 1]]);

      const temp = newArray[i];
      let j = i - 1;

      while (j >= 0 && newArray[j] > temp) {
        newArray[j + 1] = newArray[j];
        j--;
      }
      newArray[j + 1] = temp;
      setArray([...newArray]);
    }
    setComparing([]);
    setSorting(false);
  };

  return (
    <div>
      <Navbar
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
        disabled={sorting}
      ></Navbar>
      <h1>Sorting Algorithms Visualizer</h1>
      <div id="array-container">
        {array.map((item, index) => (
          <div
            id="array"
            key={index}
            style={{
              height: `${item}px`,
              backgroundColor: comparing.includes(item)
                ? "chartreuse"
                : "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Visualizer;
