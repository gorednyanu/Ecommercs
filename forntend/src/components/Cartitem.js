import React from "react";
import './cartitem.css';
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartItem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">${item.price}</p>
            <select
                value={item.qty}
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                className="cartItem__select"
            >
                {[...Array(item.countInStock).keys()].map((X) => (
                    <option key={X + 1} value={X + 1}>
                        {X + 1}
                    </option>
                ))}
            </select>
            <button
                className="cartitem__deleteBtn" onClick={() => removeFromCart(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem;