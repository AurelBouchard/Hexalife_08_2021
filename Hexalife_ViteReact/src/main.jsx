import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'


// import models
import Field from './models/Field.js';

// create grid
const field = new Field();

// first launching : giving neighbourhood to each cell
field.generateLinking().then();


ReactDOM.render(
    <React.StrictMode>
        <App field={field}/>
    </React.StrictMode>,
    document.getElementById('root')
);