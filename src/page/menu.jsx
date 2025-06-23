import Cart from "../component/cart";
import Logotype from "../component/logotype";
import ListMenu from "../component/listMenu";

function Menu() {
  return (
    <div className="mainMenu">
      <div className="header">
        <div className="row">
          <div className="col">
            <Logotype type="logo-white" />
          </div>
          <div className="col text-end">
            <Cart hideCounter={false} />
          </div>
        </div>
      </div>
      <ListMenu type={"wonton"} />
    </div>
  )
}

export default Menu
