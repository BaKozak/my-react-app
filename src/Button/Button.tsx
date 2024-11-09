function Button() {

    const styles = {
        background: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    // let count: number = 0;

    // const handleClick = (name: string) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me`);
    //     }
    // }

    const handleClick = (e: any) => e.target.textContent = "Piss off";

    return (
        <button style={styles} onClick={(e) => handleClick(e)}>Click me</button>
    );
}

export default Button