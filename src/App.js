import logo from './logo.svg';
import './App.css';

import React from "react";

//include images into your bundle
import { useState, useEffect } from "react";

//create your first component
export default function Home() {
	const [inputValue, setInputValue] = useState("");
	const [entradas, setEntradas] = useState([]);

	const listItems = entradas.map(entrada => (
		<li className="list-group-item" key={entrada}>
			{entrada}

			<span className="float-end">
				<button type="button" className="btn btn-warning btn-sm text-white">
					Remove
				</button>
			</span>
		</li>
	));

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
	return (
		<div>
			<div className="container mt-5">
				<div className="col-8 mx-auto">
					<h1 className="text-center text-info">Todo List</h1>

					<div className="input-group mb-3">
						<input
							className="form-control"
							type="text"
							onChange={e => setInputValue(e.target.value)}
							value={inputValue}
						/>

						<div className="input-group-append">
							<button
								className="btn btn-info text-white"
                id="button-addon2"
								onClick={() => {
									validateInput();
									setInputValue("");
								}}>
								Add something
							</button>
						</div>
					</div>
					<ul className="list-group">{listItems}</ul>
				</div>
			</div>
		</div>
	);
}

