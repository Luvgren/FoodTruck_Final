import { toggleArrayItem } from '../functions/addToCart';
function Btn({ id, text, setCount }) {
    return (
        <button id={id} className="btn btn-default" 
                onClick={() => setCount((prev) => toggleArrayItem(prev, id))}> 
        {text}</button>
    );
}
export default Btn
