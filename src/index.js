/* 
BEFORE REACT 17
import React from "react";
import ReactDOM  from "react-dom";
import CounterApp from "./CounterApp";
*/

import React from 'react';
//import { createRoot } from 'react-dom/client';
import CounterApp from "./CounterApp";
//import FirstApp from "./FirstApp";
import ReactDOM  from "react-dom";
import './index.css';

// AFTER REACT 18

const divRoot = document.querySelector('#root');
//const root = createRoot(divRoot);
//ReactDOM.render( <FirstApp  greet={'Alo alo'} />,divRoot);
//root.render( <FirstApp greet='Alo alo' /> );

ReactDOM.render( <CounterApp  />,divRoot);