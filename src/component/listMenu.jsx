import MenuItem from "./Item/menuItem";
import MenuDip from "./menu/menuDip";

function ListMenu({ type }) {
    return (
        <div className="list-container">
            <div className="headerList">Meny</div>
            <MenuItem getType={type} />
            <MenuDip getType="dip" />
        </div>
    );
}

export default ListMenu
