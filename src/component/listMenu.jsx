import MenuItem from "./Item/menuItem";
import MenuDip from "./menuDip";

function ListMenu({ type, setCount }) {
    return (
        <div className="list-container">
            <div className="headerList">Meny</div>
            <MenuItem getType={type} setCount={setCount}/>
            <MenuDip getType="dip" setCount={setCount} />
        </div>
    );
}

export default ListMenu
