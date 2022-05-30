import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import Colors from './Colors';
//import styles from './Home.module.scss';

const Home = () => {

    const [color, setColor] = useState('');
    const [colors, setColors] = useState([]);

    const setBoxColor = (e) => {
        e.preventDefault();
        setColors([...colors,color]);
        setColor('');
    }

    const removeColor = (index) =>{
        const newColors = colors?.filter((col,idx) => idx !== index)
        setColors(newColors);
    }

    return (
        <div>
            <Form onSubmit={(e) => setBoxColor(e)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Color:  </Form.Label>
                    <Form.Control 
                        type="text" 
                        value={color}
                        onChange = { (e) => setColor(e.target.value)}
                    />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>             
            </Form>
            <Colors 
                colors={colors} 
                removeColor={removeColor}
            />
            <p>If you want to delete any item, just click on it!</p>
        </div>
    )
}

export default Home;