import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SecondsCounter from "./component/secondsCounter.jsx";

let contador = 0;

setInterval(() => {

    const seis = Math.floor(contador/100000);
    const cinco = Math.floor(contador/10000);
    const cuatro = Math.floor(contador/1000);
    const tres = Math.floor(contador/100);
    const dos = Math.floor(contador/10);
    const uno = Math.floor(contador/1);
    
    contador++;

    ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis}/>);
},1000)



