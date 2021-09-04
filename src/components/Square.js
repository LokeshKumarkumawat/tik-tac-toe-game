import React from 'react'
import './Square.style.css'
const Square = ({value, onClick}) => {
    console.log('Square Rander',Square)
    return (
       <button type="button" className="square" onClick={onClick}>{value}</button>
    )
}

export default Square
