import Logotype from "../component/logotype";
import { useNavigate } from "react-router-dom";

function Confirm() {

  const navigate = useNavigate();

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
            <div className="confirm-time">Eta 5 min</div>
            <div className="confirm-id">#4KJWSADF123K</div>
        </div>
        <div className="container-confirm-bottom">
            <div className="confirm-bottom-new" onClick={() => navigate("/")}>Gör en ny beställning</div>
            <div className="confirm-bottom-order" onClick={() => navigate("/order")}>Se kvitto</div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
