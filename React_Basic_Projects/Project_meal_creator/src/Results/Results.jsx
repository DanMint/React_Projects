function Results({ breakfast, lunch, dinner }) {
    const breakfastCalories = breakfast.map(item => item.calories);
    const lunchCalories = lunch.map(item => item.calories);
    const dinnerCalories = dinner.map(item => item.calories);

    let totalCalories = 0;

    for (let i = 0; i < breakfastCalories.length; i ++) {
        totalCalories += breakfastCalories[i];
    }

    for (let i = 0; i < lunchCalories.length; i ++) {
        totalCalories += lunchCalories[i];
    }

    for (let i = 0; i < dinnerCalories.length; i ++) {
        totalCalories += dinnerCalories[i];
    }


    return(
        <>
            <h1>Total calories: {totalCalories}</h1>
        </>
    );
}

export default Results;
