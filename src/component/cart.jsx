function Cart({ hideCounter, count }) {
    return (
        <>
            {!hideCounter && <span className="counter">{count}</span>}
            <div className="cart"><i className="fas fa-shopping-cart"></i></div>
        </>
    );
}

export default Cart
