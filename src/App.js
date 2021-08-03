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
    // === STRICT COMPARISON
    if (inputValue === "") {
      console.log("The input cannot be empty");
    } else {
      console.log("All perfect!");
      setEntradas([...entradas, inputValue]);
    }
  };

  // === FUNCTION TO HANDLE LIST REMOVAL

  function handleremove(index) {
    console.log(index);
    const newList = entradas.filter((key) => key !== index);
    setEntradas(newList);
  }



  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="text-center text-secondary mb-4">To-do List</h1>
            <div className="input-group mb-3">

              <input
                className="form-control"
                placeholder="Add something to your list..."
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}

              />

              <button
                className="tn btn-info text-white input-group-text" id="basic-addon2"
                onClick={() => {
                  validateInput();
                  setInputValue("");

                }}
              >

                <i class="fas fa-plus"></i>
              </button>
            </div>

            <ul className="list-group">
              {entradas.map((index, key) => (
                <li className="list-group-item" key={key}>{index} {" "}

                  <span className="float-end"><button className="btn btn-warning btn-sm" onClick={() => handleremove(index)}><i class="fas fa-trash-alt text-white m-0"></i></button></span></li>
              ))}
            </ul>
            <h6 className="mt-3 text-secondary">List items <span class="badge bg-info">{entradas.length}</span></h6>
          </div>
        </div>
      </div>
    </div>
  );
}





