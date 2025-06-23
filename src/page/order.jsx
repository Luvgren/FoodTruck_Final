import Logotype from "../component/logotype";
import ListOrder from "../component/listOrder";

function Order() {
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
              <div className="col order-total">
                <div>Totalt</div>
                <small>inkl 20% moms</small>
              </div>
              <div className="col order-cost">101 SEK</div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-order-bottom">
          <div className="order-bottom-new">Gör en ny beställning</div>
      </div>
    </div>
  )
}

export default Order
