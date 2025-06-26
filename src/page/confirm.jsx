import NewOrderBtn from "../component/btn/newOrderBtn";
import ReceiptBtn from "../component/btn/receiptBtn";
import Logotype from "../component/logotype";
import EtaDate from "../component/etaDate";
import { useLocation } from "react-router-dom";

function Confirm() {

  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="mainConfirm">
      <div className="header">
        <div className="row">
          <div className="col">
            <Logotype type="logo-white" />
          </div>
        </div>
      </div>
      <div className="list-container-confirm">
        <div className="container-confirm">
            <img className="confirm-box" src="/box.png"></img>
            <div className="confirm-title">Dina wontons tillagas!</div>
            <div className="confirm-time"><EtaDate eta={order.eta}/></div>
            <div className="confirm-id">{order ? `#${order.id}` : ""}</div>
        </div>
      </div>
      <div className="container-Btn">
        <NewOrderBtn />
        <ReceiptBtn order={order} />
      </div>
    </div>
  )
}

export default Confirm
