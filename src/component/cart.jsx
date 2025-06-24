import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../reducers/cartReducer";

function Cart({ hideCounter, count }) {
    
    const dispath = useDispatch();
    const navigate = useNavigate(); 
    const handleCartClick = () => {
        const items = Array.isArray(count) ? count : [count];
        items.forEach(item => dispath(addToCart(item)));
        navigate("/cart");
    };

    return (
        <div onClick={handleCartClick} style={{cursor: "pointer"}}>
            {!hideCounter && (
                <span className="counter">
                    {Array.isArray(count) ? count.length : count}
                </span>
            )}
            <div className="cart">
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
    );
}

export default Cart
