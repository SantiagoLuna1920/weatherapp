import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Weather } from './weather';

const divRoot = document.querySelector("#root");

ReactDOM.render(<Weather />, divRoot);
