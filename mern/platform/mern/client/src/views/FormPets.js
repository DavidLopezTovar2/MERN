import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { createPet, getPetById, updatePet } from "../services/pets.service";
import { useParams } from 'react-router-dom';


const FormPets = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        skills: []
    })

    const petSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .required('Required'),
        type: Yup.string()
            .min(3, 'Too Short!')
            .required('Required'),
        description: Yup.string()
            .min(5, 'Too Short!')
            .required('Required'),
    });

    useEffect(() => {
        id && getPetFromService();
    }, [])

    const getPetFromService = async () => {
        try {
            const petUpdate = await getPetById(id);
            console.log("🚀 ~ file: formCreationDojo.js ~ line 50 ~ getDojoFromService ~ dojoToUpdate", petUpdate)
            setPet(petUpdate.data.pet);

        } catch(err) {
            //Todo: Mostrar error en el front
        }
    }

    const handlerSubmit = async (values) => {
        try {
            id ? await updatePet(id, values) : await createPet(values);            
            id ? alert('Pet updated') : alert('Pet created') ;
            navigate('/');
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Know a pet needing home?</h3>
                </Col>
                <Col xs={6} md={4}>
                    <Link to='/'>back to home</Link>
                </Col>
            </Row>
            <Formik
                enableReinitialize
                initialValues={pet}
                validationSchema={petSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    handlerSubmit(values)
                }}
            >
                {({ errors, getFieldProps }) => (

                    <FormikForm>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Pet name:</Form.Label>
                                        <Form.Control type="text" placeholder="Name" value={pet.name} {...getFieldProps('name')} />
                                    </Form.Group>
                                    {errors.name && (
                                        <div className="alert-danger">
                                            <p>{errors?.name}</p>
                                        </div>
                                    )}
                                    <Form.Group className="mb-3" controlId="formType">
                                        <Form.Label>Pet type:</Form.Label>
                                        <Form.Control type="text" placeholder="Type" value={pet.type} {...getFieldProps('type')} />
                                    </Form.Group>
                                    {errors.type && (
                                        <div className="alert-danger">
                                            <p>{errors?.type}</p>
                                        </div>
                                    )}
                                    <Form.Group className="mb-3" controlId="formDescription">
                                        <Form.Label>Pet description:</Form.Label>
                                        <Form.Control type="text" placeholder="Description" value={pet.description} {...getFieldProps('description')} />
                                    </Form.Group>
                                    {errors.description && (
                                        <div className="alert-danger">
                                            <p>{errors?.description}</p>
                                        </div>
                                    )}
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formSkill1">
                                        <Form.Label>Skill 1:</Form.Label>
                                        <Form.Control type="text" placeholder="Skill 1" value={pet.skills[0]} {...getFieldProps('skills[0]')} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSkill2">
                                        <Form.Label>Skill 2:</Form.Label>
                                        <Form.Control type="text" placeholder="Skill 2" value={pet.skills[1]} {...getFieldProps('skills[1]')} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSkill3">
                                        <Form.Label>Skill 3:</Form.Label>
                                        <Form.Control type="text" placeholder="Skill 3" value={pet.skills[3]} {...getFieldProps('skills[2]')} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit">
                                {id ? "Edit pet" : "Add pet" }
                            </Button>
                        </Container>
                    </FormikForm>
                )}

            </Formik>
        </Container>
    )

}

export default FormPets;