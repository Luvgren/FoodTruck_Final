import React, { useEffect, useState } from 'react';

function OrderItem( { getType } ) {
    
    const [data, setData] = useState(null); // create an array
    useEffect(() => {
        fetch("https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu", {
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
            <div id={getType}>
                test
            </div>
        </>
    );
}

export default OrderItem
