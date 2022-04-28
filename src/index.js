import React from 'react'
import reactDOM from 'react-dom'
import NameForm from "./components/app.js";
import '../src/App.css';


reactDOM.render(
    <NameForm />,

    document.getElementById('mountNode')
)
