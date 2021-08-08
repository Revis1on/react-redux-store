import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import "../App.css"
import axios from 'axios'
import {setProducts} from '../Redux/Actions/productActions'

const ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()
   
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error)=>{
            console.log(error);
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() =>{
        fetchProducts();
    })
    console.log("Product: ",products)
    return (
        <div className = " top-margin ui grid container ">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
