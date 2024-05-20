import History from '../History/History.jsx'
import styles from './Calculator.module.css'
import React, {useState} from 'react';

function Calculator() {
    const [value, setValue] = useState(0);
    const [output, setOutput] = useState("");

    const [valA, setValA] = useState("");
    const [valB, setValb] = useState("");
    const [operator, setOperator] = useState('');
    const [equal, setEqual] = useState(false);

    function putOne() {
       if (operator == '') {
        valA += 1;
       }
    }

    function putTwo() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putThree() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putFour() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putFive() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putSix() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putSeven() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putEight() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putNine() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    function putZero() {
        console.log(value);
        setValue(1);
        console.log(value);
    }

    return(
        <>
            <div className='styles.calculator'>
                <div className='styles.display'>
                    <h5>{output}</h5>
                </div>
                <div className='styles.buttonsNumbers'>
                    <button onClick={putOne}>1</button>
                    <button>2</button>
                    <button>3</button>
                    <br></br>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <br></br>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <br />
                    <button>0</button>
                </div>

                <div className='styles.arithmeticOperators'>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                </div>
            </div>
        </>
    );
}

export default Calculator;