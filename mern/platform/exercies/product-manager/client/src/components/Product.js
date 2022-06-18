import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProductById } from "../services/product.service";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState('');

    const getProductFromService = async() => {
        try{
            let thisProduct = await getProductById(id);
            setProduct(thisProduct.data.product)
        }catch(err){
            alert(err);
        }
    } 

    useEffect(() => {
        id && getProductFromService();
    }, [id])

    return(
        <>
            <h2>{product.title}</h2>
            <h6>Price: ${product.price}</h6>
            <h6>Description: {product.description}</h6>
        </>
    )
}
export default Product;