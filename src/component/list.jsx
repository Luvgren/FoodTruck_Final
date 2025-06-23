import MenuItem from "../component/Item/menuItem";
import MenuDip from "../component/menu/menuDip";

function List({ type }) {
    return (
        <div className="list-container">
            <div className="headerList">Meny</div>
            <MenuItem getType="wonton" />
            <MenuDip getType="dip" />
        </div>
    );
}

export default List
