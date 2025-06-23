import React, { useEffect, useState } from 'react';

function CartItem( { getType } ) {

    // Types: wonton, cart

    const [data, setData] = useState(null); // create an array
    useEffect(() => {
        fetch("https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/a2f4/orders", {
            headers: {
                'accept': 'application/json',
                'x-zocom': 'yum-7BTxHCyHhzI'
            }
        })
        .then((res) => res.json())
        .then(data => {
            setData(data);
            console.log(data); // Check the structure in your browser console
        });
    }, []);

    return (
        <>
            <div id={getType}> Order here </div>
        </>
    );
}

export default CartItem
