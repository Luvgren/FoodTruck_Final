function Btn({ id, text, setCount }) {
    return (
        <button onClick={() => setCount((count) => count + 1)} id={id} className="btn btn-default">{text}</button>
    );
}
export default Btn
