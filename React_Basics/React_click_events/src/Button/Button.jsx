import styles from "./Button.module.css"

function Button() {
    
    const hanleClick = () => console.log("OUCH!!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    let count = 0;
    const handleClick3 = (name) => {
        if (count < 3) {
            ++count;
            console.log(`${name} you clicked me ${count} times`);
        }
        else {
            console.log(`${name} STOP BOTHERING ME!`);
        }
    }

    //how event works (Here we change the button text agter clicking)
    const handleClick4 = (e) => e.target.textContent = "OUCH";


    return(
        <>
            <button onClick={(e) => handleClick4(e)}>Click Me</button>
        </>
    );
}

export default Button