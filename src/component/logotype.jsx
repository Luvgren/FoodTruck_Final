function Logotype({ type }) {
    const logotype = type && type.trim() !== "" ? type : "logo";
    return (
        <img className="logo" src={`${logotype}.png`} alt="Logotype Yum Yum Gimme sum" />
    );
}

export default Logotype
