
function List() {
    const fruits = [{id: 1, name: "apple", calories: 95}, {id: 2, name: "orange", calories: 45}, {id: 3, name: "banana", calories: 105}, {id: 4, name: "cocnut", calories: 159}];

    /// sorts the dictioanry alphabeticaly
    //fruits.sort((a, b) => a.name.localeCompare(b.name));
    /// sorts in reverse alphabeticaly
    //fruits.sort((a, b) => b.name.localeCompare(a.name));
    /// sorts by calorie
    fruits.sort((a, b) => a.calories - b.calories)

    ///filtering fruites by cal basicaly onyly fruites that are more then 100 cal
    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)

    const listItemsAll = fruits.map(fruit => <li key={fruit.id}>{fruit.name} has {fruit.calories} calories</li>);
    const listItemsOver100 = lowCalFruit.map (fruit => <li key={fruit.id}>{fruit.name} has {fruit.calories} calories</li>);

    return (
        <>
            <div>
                <h1>All of fruits</h1>
                <ol>{listItemsAll}</ol>
            </div>
            <div>
                <h1>Fruites that are more then 100 cal</h1>
                <ol>{listItemsOver100}</ol>
            </div>
        </> 
    );
}

export default List