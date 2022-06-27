import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import UserForm from '../components/UserForm';
import Header from '../components/Header';

const LoginForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    return (
        <>
            <Header props='login'/>
            <Container>
                <Row className="m-6">
                    <h1 className="text-center">Bienvenido de nuevo JobKy</h1>
                </Row>
                <Row>
                    <Col sm={2} className="bg-primary">

                    </Col>
                    <Col sm={8} className="text-center">

                    </Col>
                    <Col sm={2} className="bg-primary">

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginForm;