import Cart from "../component/cart";
import Logotype from "../component/logotype";
import ListMenu from "../component/listMenu";
import { useState } from 'react';

function Menu() {
  const [count, setCount] = useState(0);
  return (
    <div className="mainMenu">
      <div className="header">
        <div className="row">
          <div className="col">
            <Logotype type="logo-white" />
          </div>
          <div className="col text-end">
            <Cart hideCounter={false} count={count} />
          </div>
        </div>
      </div>
      <ListMenu type={"wonton"} setCount={setCount} />
    </div>
  )
}

export default Menu
