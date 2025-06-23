import OrderItem from "./Item/orderItem";

function ListOrder({ type }) {
    return (
        <>
            <div className="list-container-order">
                <OrderItem getType={type} />
            </div>
        </>
    );
}
export default ListOrder
