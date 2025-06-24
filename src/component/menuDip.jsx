import Btn from "./btn";
import { useGetMenuItemsQuery } from '../api/data';

function menuDip( { getType, setCount }) {

    const { data } = useGetMenuItemsQuery(); // Get query
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
                .map(item => ( 
                    <Btn 
                        key={item.id} 
                        id={item.id} 
                        text={item.name} 
                        setCount={setCount}
                    /> ))
            : ''}
        </div>
        </>
    );
}

export default menuDip
