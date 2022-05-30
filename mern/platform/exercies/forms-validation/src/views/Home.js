import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import styles from './Home.module.scss';
import Alert from 'react-bootstrap/Alert';

const Home = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirPassword, setConfirmPassword] = useState('');

    const valdiationFirstName = () => {        
        if(firstName.length >= 2){
            return;
        } else {
            return <Alert className="alert alert-danger">First name should be at least 2 characters</Alert>;
        }
    }

    const valdiationLastName = () => {
        if(lastName.length >= 2){
            return;
        } else {
            return <Alert className="alert alert-danger">Last name should be at least 2 characters</Alert>;
        }
    }

    const valdiationEmail = () => {
        if(email.length >= 5){
            return;
        } else {
            return <Alert className="alert alert-danger">Email should be at least 5 characters</Alert>;
        }
    }

    const valdiationPassword = () => {
        if(password.length >= 8){
            return;
        } else {
            return <Alert className="alert alert-danger">Password be at least 8 characters</Alert>;
        }
    } 

    const samePassword = () => {
        if(password === confirPassword){
            return;
        } else {
            return <Alert className="alert alert-danger">Password must match</Alert>;
        }
    } 

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
                {valdiationFirstName()}
                <Form.Group className="mb-3 d-flex" controlId="formGroupLastName">
                    <Form.Label className="col-2">Last name</Form.Label>
                    <Form.Control 
                        type="text" 
                        onChange = { (e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                {valdiationLastName()}
                <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                    <Form.Label className="col-2">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        onChange = { (e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                {valdiationEmail()}
                <Form.Group className="mb-3 d-flex" controlId="formGroupPassword">
                    <Form.Label className="col-2">Password</Form.Label>
                    <Form.Control 
                        type="password"
                        onChange = { (e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                {valdiationPassword()}
                <Form.Group className="mb-3 d-flex" controlId="formGroupConfirmPassword">
                    <Form.Label className="col-2">Confirm password</Form.Label>
                    <Form.Control
                        type="password" 
                        onChange = { (e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                {samePassword()}
            </Form>
        </div>
    )
}

export default Home;