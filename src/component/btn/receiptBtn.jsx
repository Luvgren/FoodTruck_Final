import { useNavigate } from "react-router-dom";

function ReceiptBtn() {

  const navigate = useNavigate();
  
  return (
    <>
        <div className="receiptBtn" onClick={() => navigate("/orders")}>Se kvitto</div>
    </>
  )
}
export default ReceiptBtn
