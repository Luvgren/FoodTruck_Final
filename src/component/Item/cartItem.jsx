import React from 'react';
import { useSelector } from "react-redux";
import { useGetMenuItemsQuery } from "../../api/data";

function CartItem( { getType } ) {

    const cart = useSelector(state => state.cart); // array of IDs
    const { data } = useGetMenuItemsQuery();
    const menuItems = Array.isArray(data) ? data : data?.items || [];
    const cartItems = menuItems.filter(item => cart.includes(item.id));

    return (
        <>
            <div id={getType}>
                {cartItems.length === 0 ? (
                    <div>Your cart is empty.</div>
                ) : (
                    cartItems.map(item => (
                        <div className='items' key={item.id}>
                            <div className='d-flex justify-content-between align-items-baseline'>
                                <span className='title pe-2'>{item.name}</span>
                                <span className='line'></span>
                                <span className='cost ps-2'>{item.price} SEK</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default CartItem
