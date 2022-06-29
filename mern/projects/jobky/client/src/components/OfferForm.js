import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { createJoboffer } from '../services/joboffer.services';
import Swal from 'sweetalert2';
import Header from './Header';

const OfferForm = () => {

    const navigate = useNavigate();

    const [joboffer, setJoboffer] = useState({
        position: '',
        company: '',
        image: '',
        description: ''
    })

    const offerSchema = Yup.object().shape({
        position: Yup.string()
            .required('Este campo es requerido')
            .min(3, 'Debe tener por lo menos 3 caracteres'),
        company: Yup.string()
            .required('Este campo es requerido'),
        image: Yup.string()
            .required('Este campo es requerido'),
        description: Yup.string()
            .required('Este campo es requerido')
            .min(3, 'Debe tener por lo menos 3 caracteres')
    });

    const handlerSubmit = async (values) => {
        try {
            await createJoboffer(values);
            Swal.fire({
                title: '¡Felicidades!',
                text: 'Tu oferta ha sido registrada',
                icon: 'success',
                confirmButtonColor: '#0275d8'
            })
            navigate('/joboffers');
        }
        catch (err) {
            Swal.fire({
                title: 'Ups!',
                text: 'No hemos podido crear tu oferta laboral, intenta de nuevo',
                icon: 'error',
                confirmButtonColor: '#0275d8'
            })
        }
    }

    return(
        <>
        <Container>
                <Formik
                    submitForm
                    initialValues={joboffer}
                    validationSchema={offerSchema}
                    onSubmit={values => {
                        console.log(values);
                        handlerSubmit(values)
                    }}
                >
                    {({ errors, getFieldProps }) => (

                        <FormikForm>
                            <div>
                                <Form.Group controlId="formPosition">
                                    <Form.Label>Nombre de la posición</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre posición" value={joboffer.position} {...getFieldProps('position')} />
                                </Form.Group>
                                {errors.position && (
                                    <div className="d-flex text-danger error-form">
                                        <p>{errors?.position}</p>
                                    </div>
                                )}
                            </div >
                            <div className="mt-3">

                                <Form.Group controlId="formCompany">
                                    <Form.Label>Nombre de la empresa</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre empresa" value={joboffer.company} {...getFieldProps('company')} />
                                </Form.Group>
                                {errors.company && (
                                    <div className="d-flex text-danger error-form">
                                        <p>{errors?.company}</p>
                                    </div>
                                )}
                            </div>
                            <div className="mt-3">
                                <Form.Group controlId="formImage">
                                    <Form.Label>Imagen de la empresa</Form.Label>
                                    <Form.Control type="text" placeholder="Imagen" value={joboffer.image} {...getFieldProps('image')} />
                                </Form.Group>
                                {errors.image && (
                                    <div className="d-flex text-danger error-form">
                                        <p>{errors?.image}</p>
                                    </div>
                                )}
                            </div>
                            <div className="mt-3">
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control type="text" placeholder="Descripción" value={joboffer.description} {...getFieldProps('description')} />
                                </Form.Group>
                                {errors.description && (
                                    <div className="d-flex text-danger error-form">
                                        <p>{errors?.description}</p>
                                    </div>
                                )}
                            </div>
                            <Button className="mt-3" variant="primary" type="submit">
                                Crear oferta
                            </Button>
                        </FormikForm>
                    )}

                </Formik>
            </Container>
        </>
    )
}

export default OfferForm;