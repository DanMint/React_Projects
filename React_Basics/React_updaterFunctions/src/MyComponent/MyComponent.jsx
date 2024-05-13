import React, {useState} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    // in react its updates line by line and writing  setCount(count + 1) will only increment it once. has we need an updater function
    // with updater functions react puts the functions in a queue and it makes them execute in queu fashion (fifo)
    function add() {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    return(
        <>
            <h1>{count}</h1>


            <button onClick={add}>ADD</button>
        
        
        </>
    );
}

export default MyComponent