import Cart from "../component/cart";
import Logotype from "../component/logotype";
import List from "../component/list";

function Menu() {
  return (
    <>
    <div className="header bg-primary">
      <div className="row">
        <div className="col">
          <Logotype type="logo" />
        </div>
        <div className="col text-end">
          <Cart />
          <span className="badge bg-danger">0</span>
        </div>
      </div>
    </div>
    <List type={"Meny"} />
    </>
  )
}

export default Menu
