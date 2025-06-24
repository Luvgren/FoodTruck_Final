import { useGetMenuItemsQuery } from '../../api/data';
import { toggleArrayItem } from '../../functions/addToCart';

function MenuItem( { getType , setCount} ) {
    const { data, error, isLoading } = useGetMenuItemsQuery(); // Get query
    if (isLoading) return <div className='text-center'>Loading...</div>;
    if (error) return <div className='text-center'>Error loading menu.</div>;

    return (
        <>
            <div id={getType}>
                {Array.isArray(data?.items)
                    ? data.items
                        .filter(item => item.type === getType)
                        .map(item => (
                        <div className='items' key={item.id} id={item.id}
                            onClick={() => setCount((prev) => toggleArrayItem(prev, item.id))}>
                            <div className='d-flex justify-content-between align-items-baseline'>
                            <span className='title pe-2'>{item.name}</span>
                            <span className='line'></span>
                            <span className='cost ps-2'>{item.price} SEK</span>
                            </div>
                            <div className='ingredients'>{item.ingredients?.join(', ')}</div>
                        </div>
                        ))
                    : <div className='text-center'>Loading...</div>}
            </div>
        </>
    );
}

export default MenuItem
