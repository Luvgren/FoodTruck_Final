import MenuItem from "../component/Item/menuItem";
import MenuDip from "../component/menu/menuDip";

function List({ type }) {
    return (
        <div className="pt-2 pb-4">
            <div className="list-container">
                <h1 className="text-uppercase">Meny</h1>
                <MenuItem />
                <MenuDip />
            </div>
        </div>
    );
}

export default List
