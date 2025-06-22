import React, { useEffect, useState } from 'react';

function menuItem() {

    const [data, setData] = useState(null); // create an array
    useEffect(() => { // and then fetch json
        fetch("https://api.sampleapis.com/coffee/hot") // Vi behöver fixa tenant grejen
        .then((res) => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <>
            {data ? data.map(item => 
                <div className='item'>
                    <div className='d-flex justify-content-between align-items-baselinte' key={item.id}>
                        <span className='title pe-2'>{item.title}</span>
                        <span className='line'></span>
                        <span className='cost ps-2'>9 SEK</span>
                    </div>
                    <div className='ingredients'>Ett, Två, Tre</div>
                </div>
                ) : 'Loading...'}
        </>
    );
}

export default menuItem
