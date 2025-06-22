function Logotype({ type }) {
    const logotype = type && type.trim() !== "" ? type : "logo";
    return (
        <img src={`${logotype}.svg`} alt="Logotype Yum Yum Gimme sum" />
    );
}

export default Logotype
