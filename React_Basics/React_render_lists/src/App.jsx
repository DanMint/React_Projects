import List from './List/List.jsx'
import ListProps from './ListProps/ListProps.jsx';

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95}, {id: 2, name: "orange", calories: 45}, {id: 3, name: "banana", calories: 105}, {id: 4, name: "cocnut", calories: 159}];

  return (
    <>
        <List />
        <ListProps items={fruits} />
    </>
  )
}

export default App
