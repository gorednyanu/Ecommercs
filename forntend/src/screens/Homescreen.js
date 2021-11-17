import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Product from "../components/Product";
import './Homescreen.css';
import { getProducts as listProducts } from '../Redux/actions/productActions';

const Homescreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homrscreen">
            <div className="homescreen__products">
            {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
            </div>
        </div>
    )
};
export default Homescreen;