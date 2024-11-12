function Button() {

    const stylesButton = {
        background: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    const handleClick = (e: any) => e.target.textContent = "Ouch!";

    return (
        <button style={stylesButton} onClick={(e) => handleClick(e)}>Click me</button>
    );
}

export default Button