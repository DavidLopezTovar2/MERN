import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPetById } from "../services/pets.service";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { deletePet } from "../services/pets.service";

const Pet = () => {

    const navigate = useNavigate();
    const [pet, setPet] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getPetFromService();
    }, []);

    const getPetFromService = async () => {
        try {
            let newPet = await getPetById(id);
            setPet(newPet.data.pet);
        } catch (er) {
            alert(er);
        }
    }

    const deletePetFromService = async() =>{
        try{
            await deletePet(pet._id);
            alert('Pet deleted from database');
            navigate('/');
        }catch(err) {
            alert(err);
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <h3>These pets are looking for a good home</h3>
                    </Col>
                    <Col xs={6} md={4} >
                        <ul className="d-block">
                            <li>
                                <Link to='/'>Go back to home</Link>
                            </li>
                                <Button onClick={() => deletePetFromService()} className="btn btn-danger">
                                    Adopt {pet.name}
                                </Button>
                            <li>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="border border-secondary rounded">
                <Row>
                    <Col xs lg="2">
                        <h4>Pet type:</h4>
                    </Col>
                    <Col>
                        <h4>{pet.type}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="2">
                        <h4>Description:</h4>
                    </Col>
                    <Col>
                        <h4>{pet.description}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="2">
                        <h4>Skills:</h4>
                    </Col>
                    <Col>
                        {pet.skills?.map((skill, idx) => (
                            <h4>{skill}</h4>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Pet;