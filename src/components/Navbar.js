import React from "react";

function Navbar({ generateNewArray, bubbleSort, insertionSort, disabled }) {
  console.log(disabled);
  return (
    <div>
      <nav id="navbar">
        <button
          id="generate-new-array-button"
          onClick={generateNewArray}
          disabled={disabled}
        >
          Generate New Array
        </button>
        <button onClick={bubbleSort} disabled={disabled}>
          Bubble Sort
        </button>
        <button onClick={insertionSort} disabled={disabled}>
          Insertion Sort
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
