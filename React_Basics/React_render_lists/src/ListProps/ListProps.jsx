import PropTypes from "prop-types"


function ListProps(props) {

    const itemList = props.items;

    const listItem = itemList.map(fruit => <li key={fruit.id}>{fruit.name} has {fruit.calories} calories</li>);

    return(
        <>  
            <h1>Prop list</h1>
            <ol>{listItem}</ol>
        </>
    )
}

ListProps.proptypes = {
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

export default ListProps