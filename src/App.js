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

  function handleremove(index){
    console.log(index);
    const newList = entradas.filter((key) => key !== index);
    setEntradas(newList);
  }
    
  

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />

      <button
        onClick={() => {
          validateInput();
        }}
      >
        Click to validate empty
      </button>


      <ul>
        {entradas.map((index, key) => (
          <li key={key}>{index} {" "}

            <span><button onClick={() => handleremove(index)}>x</button></span></li>
        ))}
      </ul>

    </div>
  );
}





