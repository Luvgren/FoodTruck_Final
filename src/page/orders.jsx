import '../css/order.css';
import Logotype from "../component/logotype";
import ListOrder from "../component/listOrder";
import { useLocation } from "react-router-dom";
import NewOrderBtn from "../component/btn/newOrderBtn";

function Orders() {

  const location = useLocation();
  const order = location.state?.order;
  
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
          <div className="order-id">{order ? `#${order.id}` : ""}</div>
          <ListOrder type={"order"} />
        </div>

        <div className="container-order-total">
          <div className="col-12">
            <div className="row">
              <div className="col bottom-container-total">
                <div className="order-total">Totalt</div>
                <div className="order-moms">inkl 20% moms</div>
              </div>
              <div className="col order-cost">{order ? `${order.orderValue}` : "0"} SEK</div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-Btn">
        <NewOrderBtn />
      </div>
    </div>
  )
}

export default Orders
