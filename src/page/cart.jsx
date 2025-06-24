import Cart from "../component/cart";
import ListCart from "../component/listCart";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  return (
    <div className="mainCart">
      <div className="header">
        <div className="row">
          <div className="col">
            <button className="back" onClick={() => navigate("/menu")}>
              <i className="fa fa-arrow-left"></i>
            </button>
          </div>
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
