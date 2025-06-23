import Cart from "../component/cart";
import Logotype from "../component/logotype";
import List from "../component/list";

function Menu() {
  return (
    <>
    <div className="header">
      <div className="row">
        <div className="col">
          <Logotype type="logo-white" />
        </div>
        <div className="col text-end">
          <Cart />
        </div>
      </div>
    </div>
    <List type={"Meny"} />
    </>
  )
}

export default Menu
