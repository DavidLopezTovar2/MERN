import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate, useParams } from "react-router-dom";
import { createProduct, getProducts } from "../services/product.service";
import Nav from 'react-bootstrap/Nav'

const Home = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const getProductsFromService = async () => {
        try {
            let newProducts = await getProducts();
            console.log(newProducts.data.products);
            setProducts(newProducts.data.products);
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getProductsFromService();
    }, []);

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

    const handlerSubmit = async (values) => {
        try {
            await createProduct(values);
        }
        catch (err) {
            alert(err + 'HERE');
        }
    }

    const goToProductDetailed = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={product}
                validationSchema={productSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
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
                            Submit
                        </Button>
                    </FormikForm>
                )}

            </Formik>
            <h2>All products</h2>
            {products?.map((product, idx) => (
                <h5 key={idx} onClick={() => goToProductDetailed(product._id)}>{product.title}</h5>            ))}
        </>

    )
}

export default Home;