import React, { useEffect, useState } from 'react';
import Btn from "../../component/btn";

function menuDip( { getType, setCount }) {

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
        });
    }, []);

    const filteredItems = Array.isArray(data?.items) ? data.items.filter(item => item.type === getType) : []; // Get the array
    const firstPrice = filteredItems.length > 0 ? filteredItems[0].price : null; //... and then pick the first price of dip (since they all cost the same)

    return (
        <>
            <div className='items border-0'>
                <div className='d-flex justify-content-between align-items-baseline'>
                    <span className='title pe-2'>Dipsås</span>
                    <span className='line'></span>
                    <span className='cost ps-2'>{firstPrice !== null && ( firstPrice )} SEK</span>
                </div>
            </div>

        <div className="btn-container pt-0">
            {Array.isArray(data?.items)
            ? data.items
                .filter(item => item.type === getType)
                .map(item => ( <Btn key={item.id} id={item.id} text={item.name} setCount={setCount} /> ))
            : ''}
        </div>
        </>
    );
}

export default menuDip
