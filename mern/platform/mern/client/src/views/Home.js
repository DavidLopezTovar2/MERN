import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { getPets } from "../services/pets.service";

const Home = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPetsFromService();
    }, []);

    const getPetsFromService = async () => {
        try {
            let newPets = await getPets();
            console.log(newPets.data.pets);
            setPets(newPets.data.pets);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div >
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <h3>These pets are looking for a good home</h3>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to='/pets/new'>Add a pet to the shelter</Link>
                    </Col>
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets?.sort((a, b) => a.type.localeCompare(b.type)).map((pet, idx) => (
                                <tr key={idx}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td className=""><Link to={`/pets/${pet._id}`} >Details</Link></td>
                                    <td className=""><Link to={`/pets/${pet._id}/edit`} >Edit</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )

}

export default Home;