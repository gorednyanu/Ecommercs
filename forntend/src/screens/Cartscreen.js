import React from "react";
import './Cartscreen.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from "../components/Cartitem";
import { addToCart, removeFromCart } from "../Redux/actions/cartActions";
const Cartscreen = () => {

    const dispatch = useDispatch();

    const Cart = useSelector((state) => state.cart);

    const { cartItems } = Cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCarta = (id) =>{
        dispatch(removeFromCart(id));

    };

    const getCartCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty,0);
    };

    const getCartSubTitle = () =>{
        return cartItems.reduce((price,item) => (item.price * item.qty) + price, 0);
    };


    return <div className="cartscreen">
        <div className="cartscreen__left">
            <h2> Shopping Cart </h2>
            {cartItems.length === 0 ? (
                <div>
                    Your Cart is Empty <Link to="/">Go Back</Link>
                </div>
            ) : (
                cartItems.map((item) => <CartItem
                    key={item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeFromCart={removeFromCarta}
                />)
            )}
        </div>
        <div className="cartscreen__right">
            <div className="cartscreen__info">
                <p>Subtotal ({getCartCount()}) items</p>
                <p>${getCartSubTitle().toFixed(2)}</p>
            </div>
            <div>
                <button > Proceed To Checkout</button>
            </div>
        </div>
    </div>;

};
export default Cartscreen;