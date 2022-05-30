import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

const Colors = ({ colors, removeColor }) => {

    const setColor = () =>{
        return <div ></div>
    }

    return (
        <div className="d-flex">
            {colors?.map((newColor, index) => (
                <div 
                    onClick={() => removeColor(index)}
                    key={index} 
                    style={{ border: '1px solid black', backgroundColor: newColor, height: '60px', width: '60px', margin: '3px'}}
                />
                    
                
            ))}
        </div>
    )
}

export default Colors;