
function Results(breakfast, lunch, dinner) {
    return(
        <>
            <div>
                <h2>Breakfast:</h2>
                <ul>
                    {breakfast.map(food => (
                        <li key={food.id}>{food.name} - Calories: {food.calories}, Protein: {food.protein}g</li>
                    ))}
                </ul>
                <h2>Lunch:</h2>
                <ul>
                    {lunch.map(food => (
                        <li key={food.id}>{food.name} - Calories: {food.calories}, Protein: {food.protein}g</li>
                    ))}
                </ul>
                <h2>Dinner:</h2>
                <ul>
                    {dinner.map(food => (
                        <li key={food.id}>{food.name} - Calories: {food.calories}, Protein: {food.protein}g</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Results