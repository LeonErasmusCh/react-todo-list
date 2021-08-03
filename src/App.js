//import "./styles.css";
import "../src/App.css"
import React, { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    console.log(
      "mi arreglo tiene",
      entradas.length,
      "elementos hasta el momento"
    );
    console.log(entradas);
  }, [entradas]);

  const validateInput = () => {
    // === COMPARACIÓN ESTRICTA
    if (inputValue === "") {
      console.log("The input cannot be empty");
    } else {
      console.log("All perfect!");
      setEntradas([...entradas, inputValue]);
    }
  };

  function handleremove(index) {
    console.log(index);
    const newList = entradas.filter((key) => key !== index);
    setEntradas(newList);
  }



  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mb-4">To-Do List</h1>
        <div className="input-group mb-3">

          <input
          className="form-control"
          placeholder="Add something to your list..."
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

          <button
          className="tn btn-info input-group-text" id="basic-addon2"
            onClick={() => {
              validateInput();
            }}
          >
            Add item
          </button>
        </div>

        <ul className="list-group">
          {entradas.map((index, key) => (
            <li className="list-group-item" key={key}>{index} {" "}

              <span className="float-end"><button className="btn btn-warning btn-sm"   onClick={() => handleremove(index)}>Delete</button></span></li>
          ))}
        </ul>


      </div>
    </div>
  );
}





