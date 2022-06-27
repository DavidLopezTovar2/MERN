import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import UserForm from '../components/UserForm';

const RegisterForm = () => {



    return (
        <Container>
            <Row>
                <h1>Bienvenido, registrate y disfruta de grandes beneficios</h1>
            </Row>
            <Row>
                <Col sm={4} className="bg-primary">
                    
                </Col>
                <Col sm={8} className="text-center">
                    <UserForm  />
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterForm;