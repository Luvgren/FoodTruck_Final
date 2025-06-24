import Logotype from "../component/logotype";
import ListOrder from "../component/listOrder";
import { useSelector } from "react-redux";
import { useGetMenuItemsQuery } from "../api/data";
import { useNavigate } from "react-router-dom";

function Order() {

  const navigate = useNavigate();
  const cart = useSelector(state => state.cart); // array of IDs
  const { data } = useGetMenuItemsQuery();
  const menuItems = Array.isArray(data) ? data : data?.items || [];
  const cartItems = menuItems.filter(item => cart.includes(item.id));
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="mainOrder">
      <div className="header">
        <div className="row">
          <div className="col">
            <Logotype type="logo-white" />
          </div>
        </div>
      </div>
      <div className="list-container-order">

        <div className="container-order">
          <Logotype type="logo" />
          <div className="order-title">Kvitto</div>
          <div className="order-id">#4KJWSADF123K</div>
          <ListOrder type={"order"} />
        </div>

        <div className="container-order-total">
          <div className="col-12">
            <div className="row">
              <div className="col bottom-container-total">
                <div className="order-total">Totalt</div>
                <div className="order-moms">inkl 20% moms</div>
              </div>
              <div className="col order-cost">{total} SEK</div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-order-bottom">
          <div className="order-bottom-new" onClick={() => navigate("/")}>Gör en ny beställning</div>
      </div>
    </div>
  )
}

export default Order
