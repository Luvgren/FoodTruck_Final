import React, { useEffect, useState } from 'react';
import Btn from "../../component/btn";

function menuDip( { getType }) {

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

    return (
        <div className="btn-container">
            {Array.isArray(data?.items)
                ? data.items
                    .filter(item => item.type === getType)
                    .map(item => ( <Btn key={item.id} id={item.id} text={item.name} /> ))
                : ''}
        </div>
    );
}

export default menuDip
