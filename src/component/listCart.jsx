import React from "react";
import { useSelector } from "react-redux";
import { useGetMenuItemsQuery, useCreateOrderMutation } from "../api/data";
import { useNavigate } from "react-router-dom";
import CartItem from "../component/Item/cartItem";

function ListCart({ type }) {

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart); // array of IDs
    const { data } = useGetMenuItemsQuery();
    const [createOrder] = useCreateOrderMutation();

    const menuItems = Array.isArray(data) ? data : data?.items || [];
    const cartItems = menuItems.filter(item => cart.includes(item.id));
    const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

    const orderPayload = { items: cartItems.map(item => item.id) };

    const handleOrder = async () => {
        try {
            const response = await createOrder(orderPayload).unwrap();
            console.log("POST response:", response);
            navigate("/confirm", { state: { order: response.order } });
        } catch (error) {
            console.error("Oh no, the order failed ):", error);
        }
    };

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
                <div className="bottom-container-confirm" onClick={handleOrder}>
                    Take my money!
                </div>
            </div>
        </>
    );
}
export default ListCart
