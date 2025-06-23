import React, { useEffect, useState } from 'react';

function MenuItem( { getType } ) {
    
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
                {Array.isArray(data?.items)
                    ? data.items
                        .filter(item => item.type === getType)
                        .map(item => (
                        <div className='items' key={item.id} id={item.id}>
                            <div className='d-flex justify-content-between align-items-baseline'>
                            <span className='title pe-2'>{item.name}</span>
                            <span className='line'></span>
                            <span className='cost ps-2'>{item.price} SEK</span>
                            </div>
                            <div className='ingredients'>{item.ingredients?.join(', ')}</div>
                        </div>
                        ))
                    : 'Loading...'}
            </div>
        </>
    );
}

export default MenuItem
