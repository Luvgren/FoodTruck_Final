import { useNavigate } from "react-router-dom";

function ReceiptBtn( {order} ) {
  const navigate = useNavigate();
  return (
    <div className="receiptBtn" onClick={() => navigate("/orders", { state: { order } })}>Se kvitto</div>
  )
}
export default ReceiptBtn
