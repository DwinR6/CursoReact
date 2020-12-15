import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css'; 
import CounterComponent from './CounterComponent';

const divRoot = document.querySelector('#root');
const counterCmp = document.querySelector('#counterCmp')
ReactDom.render(<PrimeraApp edwin = 'Soy Edwin Noel'/>, divRoot);
ReactDom.render( <CounterComponent counter={10}/>, divRoot)
