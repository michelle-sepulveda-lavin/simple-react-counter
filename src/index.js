import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './components/SecondsCounter';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

//Carga de JavaScript
import 'jquery';
import 'popper.js';
import 'bootstrap';

let isPaused = false;

const pausador = () => {
    isPaused = true;
}
const resume = () => {
    isPaused = false;
}

const reset = () => {
    number1 = 0;
    number2 = 0;
    number3 = 0;
    number4 = 0;
    number5 = 0;
    number6 = 0;
}

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;
let number6 = 0;

setInterval(function () {
if(!isPaused){
    if (number6 < 9) {
        number6++;
    } else {
        number6 = 0;
        number5++;
    }
    if (number5 >= 6) {
        number5 = 0;
        number4++
    }
    if (number4 > 9) {
        number4 = 0;
        number3++;
    }
    if (number3 >= 6) {
        number3 = 0;
        number2++;
    }
    if (number2 > 9) {
        number2 = 0;
        number1++;
    }
    if (number1 >= 2 && number2 > 3) {
        number1 = 0;
        number2 = 0;
    }
}


    ReactDOM.render(<SecondsCounter n1={number1} n2={number2} n3={number3} n4={number4} n5={number5} n6={number6} pausador={pausador} resume={resume} reset={reset} />, document.getElementById('root'))
}, 1000)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();