import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { createUser } from '../services/user.service';
import Swal from 'sweetalert2';

const UserForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        description: ''
    })

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('Este campo es requerido')
            .min(3, 'Debe tener por lo menos 3 caracteres'),
        email: Yup.string()
            .email('Debe ser un correo valido')
            .required('Este campo es requerido'),
        password: Yup.string()
            .required('Este campo es requerido')
            .min(3, 'Debe tener por lo menos 3 caracteres'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
        description: Yup.string()

    });

    const handlerSubmit = async (values) => {
        try {
            //id ? await updatePet(id, values) : await createPet(values);            
            //id ? alert('Pet updated') : alert('Pet created') ;
            await createUser(values);
            Swal.fire({
                title: '¡Felicidades!',
                text: 'Has sido registrado exitosamente',
                icon: 'success',
                confirmButtonColor: '#0275d8'
            })
            navigate('/login');
        }
        catch (err) {
            if (err.response.data.error.code === 11000) {
                Swal.fire({
                    title: 'Ups!',
                    text: 'Este correo ya se encuentra registrado',
                    icon: 'error',
                    footer: '<a href="">¿Deseas iniciar sesión?</a>',
                    confirmButtonColor: '#0275d8'
                })
            }
        }
    }

    return (
        <Container>
            <Formik
                submitForm
                initialValues={user}
                validationSchema={formSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    handlerSubmit(values)
                }}
            >
                {({ errors, getFieldProps }) => (

                    <FormikForm>
                        <div>
                            <Form.Group controlId="formName">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" value={user.name} {...getFieldProps('name')} />
                            </Form.Group>
                            {errors.name && (
                                <div className="d-flex text-danger error-form">
                                    <p>{errors?.name}</p>
                                </div>
                            )}
                        </div >
                        <div className="mt-3">

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={user.email} {...getFieldProps('email')} />
                            </Form.Group>
                            {errors.email && (
                                <div className="d-flex text-danger error-form">
                                    <p>{errors?.email}</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-3">

                            <Form.Group controlId="formPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" value={user.password} {...getFieldProps('password')} />
                            </Form.Group>
                            {errors.password && (
                                <div className="d-flex text-danger error-form">
                                    <p>{errors?.password}</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-3">
                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Confirmar contraseña" {...getFieldProps('passwordConfirmation')} />
                            </Form.Group>
                            {errors.passwordConfirmation && (
                                <div className="d-flex text-danger error-form">
                                    <p>{errors?.passwordConfirmation}</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-3">

                            <Form.Group controlId="formDescription">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" placeholder="Descripción (opcional)" value={user.description} {...getFieldProps('description')} />
                            </Form.Group>
                            {errors.description && (
                                <div className="d-flex text-danger error-form">
                                    <p>{errors?.description}</p>
                                </div>
                            )}
                        </div>
                        <Button className="mt-3" variant="primary" type="submit">
                            Crear usuario
                        </Button>
                    </FormikForm>
                )}

            </Formik>
        </Container>
    )
}

export default UserForm