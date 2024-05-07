import styles from './Counter.module.css'
import React, {useState} from 'react';

function Counter() {

    const [number, setNumber] = useState(0);

    const addNumber = () => {
        setNumber(number + 1);
    }

    const decreaseNumber = () => {
        setNumber(number - 1);
    }

    const refreshNumber = () => {
        setNumber(0)
    }

    return(
        <>
            <div className={styles.counter}>
                <h2 className={styles.number}>{number}</h2>
                <div className={styles.button}>
                    <button onClick={addNumber}>Add</button>
                    <button onClick={refreshNumber}>restart</button>
                    <button onClick={decreaseNumber}> Dec</button>
                </div>
            </div>
        </>
    );
}

export default Counter;