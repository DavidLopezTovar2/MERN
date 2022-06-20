import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProductById, updateProductById } from "../services/product.service";
import Products from '../components/Products';


const Home = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const { id } = useParams();    

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    })

    const productSchema = Yup.object().shape({
        title: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        price: Yup.number()
            .min(2, 'Too Short!')
            .required('Required'),
        description: Yup.string()
            .min(5, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Required'),
    });

    useEffect(() => {
        id && getPetFromService();
    }, [])

    const getPetFromService = async () => {
        try {
            const productById = await getProductById(id);            
            setProduct(productById.data.product);

        } catch(err) {
            //Todo: Mostrar error en el front
        }
    }

    const handlerSubmit = async (values) => {
        try {
            console.log(values,id);
            id ? await updateProductById(id, values) :await createProduct(values);
        }
        catch (err) {
            alert(err + 'HERE');
        }
    }    

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={product}
                validationSchema={productSchema}
                onSubmit={values => {
                    handlerSubmit(values)
                }}
            >
                {({ errors, getFieldProps }) => (
                    <FormikForm>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Ingresa nombre del producto</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={product.title} {...getFieldProps('title')} />
                        </Form.Group>
                        {errors.title && (
                            <div className="alert-danger">
                                <p>{errors?.title}</p>
                            </div>
                        )}
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Insert price of the product</Form.Label>
                            <Form.Control type="number" placeholder="Insert price" value={product.price} {...getFieldProps('price')} />
                        </Form.Group>
                        {errors.price && (
                            <div className="alert-danger">
                                <p>{errors?.price}</p>
                            </div>
                        )}
                        <Form.Group className="mb-3" controlId="descriptionPrice">
                            <Form.Label>Ingresa dirección de la sucursal</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Description" value={product.description} {...getFieldProps('description')} />
                        </Form.Group>
                        {errors.description && (
                            <div className="alert-danger">
                                <p>{errors?.description}</p>
                            </div>
                        )}
                        <Button variant="primary" type="submit">
                        {id ? "Edit" : "Submit"}
                        </Button>
                    </FormikForm>
                )}

            </Formik>

            {id ? <></> : <Products/>}
        </>

    )
}

export default Home;