import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function NewOrderBtn() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNewOrder = () => {
    dispatch({ type: "cart/clearCart" });
    navigate("/");
  };
  return (
      <>
          <div className="newOrderBtn" onClick={handleNewOrder}>Gör en ny beställning</div>
      </>
  )
}

export default NewOrderBtn
