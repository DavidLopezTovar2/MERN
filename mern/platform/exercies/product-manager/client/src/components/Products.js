import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { getProducts } from "../services/product.service";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteProduct } from "../services/product.service";

const Products = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    })

    const [products, setProducts] = useState([]);

    const getProductsFromService = async () => {
        try {
            let newProducts = await getProducts();
            setProducts(newProducts.data.products);
        } catch (err) {
            alert(err);
        }
    }

    const notify = () => toast("Product deleted!");

    useEffect(() => {
        getProductsFromService();
    }, []);

    const goToProductDetailed = (id) => {
        navigate(`/product/${id}`);
    }

    const editProductDetailed = (id) => {
        navigate(`/product/${id}/edit`);
    }

    const deleteProductDetailed = async(id) => {
        try{
            await deleteProduct(id);
            notify();
            navigate('/');
        }catch(err){

        }
        
    }

    return (
        <>
            <h2>All products</h2>
            <Table responsive striped bordered hover>
                {products?.map((product, idx) => (
                    <tbody>
                        <tr>
                            <td><h5 key={idx} onClick={() => goToProductDetailed(product._id)}>{product.title}</h5></td>
                            <td><h5 key={idx} onClick={() => editProductDetailed(product._id)}>Edit</h5></td>
                            <td><h5 key={idx} onClick={() => deleteProductDetailed(product._id)}>Delete</h5></td>
                        </tr>
                    </tbody>

                ))}
            </Table>
            <ToastContainer />
        </>
    )
}

export default Products;