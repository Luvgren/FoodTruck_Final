function Cart({ hideCounter }) {
    return (
        <>
            {!hideCounter && <span className="counter">0</span>}
            <div className="cart"><i className="fas fa-shopping-cart"></i></div>
        </>
    );
}

export default Cart
