import React from 'react';
import { useSelector } from "react-redux";
import { useGetMenuItemsQuery } from "../../api/data";
import { useLocation } from "react-router-dom";

function OrderItem( { getType } ) {
    
    const location = useLocation();
    const order = location.state?.order;

    // {order ? `#${order.id}` : ""}

    const cart = useSelector(state => state.cart); // array of IDs
    const { data } = useGetMenuItemsQuery();
    const menuItems = Array.isArray(data) ? data : data?.items || [];
    const cartItems = menuItems.filter(item => cart.includes(item.id));

    return (
        <>
            <div id={getType}>
                {cartItems.length === 0 ? (
                    <div>Du har ingen aktiv order.</div>
                ) : (
                    cartItems.map(item => (
                        <div className='items' key={item.id}>
                            <div className='d-flex justify-content-between align-items-baseline'>
                                <span className='order-title pe-2'>{item.name}</span>
                                <span className='order-line'></span>
                                <span className='order-cost ps-2'>{item.price} SEK</span>
                            </div>
                            <div className='text-start mb-3'>3 stycken</div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default OrderItem
