import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import styles from './Home.module.scss';
import DataShow from './DataShow';

const Home = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles["form-container"]}>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="formGroupFirstName">
                    <Form.Label className="col-2" >First name</Form.Label>
                    <Form.Control 
                        type="text" 
                        onChange = { (e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupLastName">
                    <Form.Label className="col-2">Last name</Form.Label>
                    <Form.Control 
                        type="text" 
                        onChange = { (e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                    <Form.Label className="col-2">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        onChange = { (e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupPassword">
                    <Form.Label className="col-2">Password</Form.Label>
                    <Form.Control 
                        type="password"
                        onChange = { (e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupConfirmPassword">
                    <Form.Label className="col-2">Confirm password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
            </Form>
            <DataShow
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={"********"}
            />
        </div>
    )
}

export default Home;