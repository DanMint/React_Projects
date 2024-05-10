import React, { useState } from "react";
import styles from './SelectFood.module.css';
import Results from '../Results/Results.jsx'

function SelectFood() {
    const food_meat = [{id: 0, name:"chicken", calories: 187, protein: 20}, {id: 1, name: "beef", calories: 220, protein: 22}, {id: 2, name: "turkey", calories: 214, protein: 32}, {id: 3, name: "pork", calories: 202, protein: 22}, {id: 4, name: "bison", calories: 207, protein: 21}];
    const food_carbs = [{id: 0, name: "bread", calories: 77, protein: 2.6}, {id: 1, name: "pasta", calories: 196, protein: 7.2}, {id: 2, name: "rice", calories: 205, protein: 4.3}, {id: 3, name: "macaroni", calories: 190, protein: 7}];
    const food_vegetable = [{id: 0, name: "tomato", calories: 22, protein: 1.1}, {id: 1, name: "cucumber", calories: 30, protein: 1.3}, {id: 2, name: "red pepper", calories: 5, protein: 1}];

    const [breakfastChoice, setBreakfastChoice] = useState([]);
    const [lunchChoice, setLunchChoice] = useState([]);
    const [dinnerChoice, setDinnerChoice] = useState([]);
    const [showResults, setShowResults] = useState(false)


    function handleBreakfastChange(breakfastArray, event) {
        const selectedFood = breakfastArray[event.target.value];
        setBreakfastChoice(breakfastChoice.concat(selectedFood));
        setBreakfastChoice(prevChoices => prevChoices.concat(selectedFood));
    }

    function handleLunchChange(lunchArray, event) {
        const selectedFood = lunchArray[event.target.value];
        setLunchChoice(lunchChoice.concat(selectedFood));
    }

    function handleDinnerChange(dinnerArray, event) {
        const selectedFood = dinnerArray[event.target.value];
        setDinnerChoice(dinnerChoice.concat(selectedFood));
    }


    function handleSubmit() {
        setShowResults(true);
    }

    if (showResults) {
        return <Results breakfast={breakfastChoice} lunch={lunchChoice} dinner={dinnerChoice} />;
    }
    

    return (
        <>
            <h1>Choose your meal combination</h1>
            <div className={styles.food}>
                <h2>Meats:</h2>
                <ul>
                    {food_meat.map(food => (
                        <li key={food.id}>{food.name} - Calories: {food.calories}, Protein: {food.protein}g</li>
                    ))}
                </ul>
                <h2>Carbohydrates:</h2>
                <ul>
                    {food_carbs.map(food => (
                        <li key={food.id}>{food.name} - Calories: {food.calories}, Protein: {food.protein}g</li>
                    ))}
                </ul>
                <h2>Fiber:</h2>
                <ul>
                    {food_vegetable.map(food => (
                        <li key={food.id}>{food.name} - Calories: {food.calories}, Protein: {food.protein}g</li>
                    ))}
                </ul>
            </div>
            <div className={styles.lunch}>
                <h2>Choose your breakfast:</h2>
                <h5>Meat:</h5>
                <select onChange={(e) => handleBreakfastChange(food_meat, e)}>
                    <option value="">Select an option</option>
                    {food_meat.map((meat, index) => (
                        <option key={meat.id} value={index}>{meat.name}</option>
                    ))}
                </select>
                <h5>Carbs:</h5>
                <select onChange={(e) => handleBreakfastChange(food_carbs, e)}>
                    <option value="">Select an option</option>
                    {food_carbs.map((carb, index) => (
                        <option key={carb.id} value={index}>{carb.name}</option>
                    ))}
                </select>
                <h5>Fiber:</h5>
                <select onChange={(e) => handleBreakfastChange(food_vegetable, e)}>
                    <option value="">Select an option</option>
                    {food_vegetable.map((veg, index) => (
                        <option key={veg.id} value={index}>{veg.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.lunch}>
                <h2>Choose your lunch:</h2>
                <h5>Meat:</h5>
                <select onChange={(e) => handleLunchChange(food_meat, e)}>
                    <option value="">Select an option</option>
                    {food_meat.map((meat, index) => (
                        <option key={meat.id} value={index}>{meat.name}</option>
                    ))}
                </select>
                <h5>Carbs:</h5>
                <select onChange={(e) => handleLunchChange(food_carbs, e)}>
                    <option value="">Select an option</option>
                    {food_carbs.map((carb, index) => (
                        <option key={carb.id} value={index}>{carb.name}</option>
                    ))}
                </select>
                <h5>Fiber:</h5>
                <select onChange={(e) => handleLunchChange(food_vegetable, e)}>
                    <option value="">Select an option</option>
                    {food_vegetable.map((veg, index) => (
                        <option key={veg.id} value={index}>{veg.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.dinner}>
                <h2>Choose your dinner:</h2>
                <h5>Meat:</h5>
                <select onChange={(e) => handleDinnerChange(food_meat, e)}>
                    <option value="">Select an option</option>
                    {food_meat.map((meat, index) => (
                        <option key={meat.id} value={index}>{meat.name}</option>
                    ))}
                </select>
                <h5>Carbs:</h5>
                <select onChange={(e) => handleDinnerChange(food_carbs, e)}>
                    <option value="">Select an option</option>
                    {food_carbs.map((carb, index) => (
                        <option key={carb.id} value={index}>{carb.name}</option>
                    ))}
                </select>
                <h5>Fiber:</h5>
                <select onChange={(e) => handleDinnerChange(food_vegetable, e)}>
                    <option value="">Select an option</option>
                    {food_vegetable.map((veg, index) => (
                        <option key={veg.id} value={index}>{veg.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleSubmit}>SUBMIT</button>
        </>
    );
}

export default SelectFood;
