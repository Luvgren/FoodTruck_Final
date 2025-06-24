import React from "react";
import { useSelector } from "react-redux";
import { useGetMenuItemsQuery } from "../api/data";
import CartItem from "../component/Item/cartItem";

function ListCart({ type }) {

    const cart = useSelector(state => state.cart); // array of IDs
    const { data } = useGetMenuItemsQuery();
    const menuItems = Array.isArray(data) ? data : data?.items || [];
    const cartItems = menuItems.filter(item => cart.includes(item.id));
    const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <>
            <div className="list-container">
                <CartItem getType="cart" />
            </div>
            <div className="bottom-container">
                <div className="bottom-container-total">
                    <span className="bottom-total">Totalt</span>
                    <span className="bottom-cost">{total} SEK</span>
                </div>
                <div className="bottom-container-confirm">
                    Take my money!
                </div>
            </div>
        </>
    );
}
export default ListCart
