import CartItem from "../component/Item/cartItem";
// ohoy glöm inte att ändra tillbaka
function ListCart({ type }) {
    return (
        <>
            <div className="list-container">
                <CartItem getType="wonton" />
            </div>
            <div className="bottom-container">
                <div className="bottom-container-total">
                    <span className="bottom-total">Totalt</span>
                    <span className="bottom-cost">101 SEK</span>
                </div>
                <div className="bottom-container-confirm">
                    Take my money!
                </div>
            </div>
        </>
    );
}
export default ListCart
