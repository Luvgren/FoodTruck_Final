import Cart from "../component/cart";
import ListCart from "../component/listCart";

function CartPage() {
  return (
    <div className="mainCart">
      <div className="header">
        <div className="row">
          <div className="col text-end">
            <Cart hideCounter={true} count="0"/>
          </div>
        </div>
      </div>
      <ListCart type={"cart"} />
    </div>
  )
}

export default CartPage
