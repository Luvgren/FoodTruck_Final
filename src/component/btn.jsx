function Btn({ type, text }) {
    const btnType = type;
    return (
        <button className="btn">{text} - {btnType}</button>
    );
}

export default Logotype
