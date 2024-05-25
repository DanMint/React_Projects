import History from '../History/History.jsx'
import styles from './Calculator.module.css'
import React, {useState} from 'react';

function Calculator() {
    /// running sum of the equation
    let [value, setValue] = useState(0);
    /// what gets ouputted to the user to see
    let [output, setOutput] = useState("");

    /// number of numbers inputted
    let [numbers, setNumbers] = useState(0)
    /// current input
    let [currentInput, setCurrentInput] = useState("");
    /// operator amount
    let [operatorAmount, setOperatorAmount] = useState(0);
    /// current operator
    let [operator, setOperator] = useState(0);
    

    function putOne() {
       if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 1);
            setOutput(currentInput);
            setOutput(output += 1);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 1);
            setOutput(output += 1);
       }

    }

    function putTwo() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 2);
            setOutput(currentInput);
            setOutput(output += 2);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 2);
            setOutput(output += 2);
       }
    }

    function putThree() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 3);
            setOutput(currentInput);
            setOutput(output += 3);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 3);
            setOutput(output += 3);
       }
    }

    function putFour() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 4);
            setOutput(currentInput);
            setOutput(output += 4);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 4);
            setOutput(output += 4);
       }
    }

    function putFive() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 5);
            setOutput(currentInput);
            setOutput(output += 5);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 5);
            setOutput(output += 5);
       }
    }

    function putSix() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 6);
            setOutput(currentInput);
            setOutput(output += 6);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 6);
            setOutput(output += 6);
       }
    }

    function putSeven() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 7);
            setOutput(currentInput);
            setOutput(output += 7);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 7);
            setOutput(output += 7);
       }
    }

    function putEight() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 8);
            setOutput(currentInput);
            setOutput(output += 8);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 8);
            setOutput(output += 8);
       }
    }

    function putNine() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 9);
            setOutput(currentInput);
            setOutput(output += 9);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 9);
            setOutput(output += 9);
       }
    }

    function putZero() {
        if (numbers == 0 && operatorAmount == 0) {
            setCurrentInput(currentInput += 0);
            setOutput(currentInput);
            setOutput(output += 0);
       }
       
       else if (numbers == operatorAmount) {
            setCurrentInput(currentInput += 0);
            setOutput(output += 0);
       }
    }

    function addPlus() {
        if (operator == '') 
            setValue(value += Number(currentInput));
            

        if (operator == '+') 
            setValue(value += Number(currentInput));

        if (operator == '-') 
            setValue(value -= Number(currentInput));
            

        if (operator == '*') 
            setValue(value *= Number(currentInput));
           

        if (operator == '/') 
            setValue(value /= Number(currentInput));
            

        setCurrentInput("");
        setOutput(output + '+');
        setOperator('+');
    }

    function equal() {
        if (currentInput == "") 
            clear(true);
        

        if (operator == '+') 
            setValue(value += Number(currentInput));

        if (operator == '-') 
            setValue(value -= Number(currentInput));
            

        if (operator == '*') 
            setValue(value *= Number(currentInput));
           

        if (operator == '/') 
            setValue(value /= Number(currentInput));

        setOutput(output + "=" + value);
            
    }

    function clear(error = false) {
        if (error) {
            setOutput("Error");
            console.log("Equals has been pressed after an operator");
        } 
        
    
        setValue(0);
        setOutput("");
        setCurrentInput("");
    }
    

    return(
        <>
            <div className='styles.calculator'>
                <div className='styles.display'>
                    <h5>{output}</h5>
                </div>
                <div className='styles.buttonsNumbers'>
                    <button onClick={putOne}>1</button>
                    <button onClick={putTwo}>2</button>
                    <button onClick={putThree}>3</button>
                    <br></br>
                    <button onClick={putFour}>4</button>
                    <button onClick={putFive}>5</button>
                    <button onClick={putSix}>6</button>
                    <br></br>
                    <button onClick={putSeven}>7</button>
                    <button onClick={putEight}>8</button>
                    <button onClick={putNine}>9</button>
                    <br />
                    <button onClick={putZero}>0</button>
                </div>

                <div className='styles.arithmeticOperators'>
                    <button onClick={addPlus}>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                </div>
                
                <div className='styles.equals'>
                    <button onClick={equal}>=</button>
                </div>
            </div>
        </>
    );
}

export default Calculator;