// TODO
/* var GroceryList = (props) => (
    // <div>
    //     <h1>My Grocery List</h1>
    <ul>
        <li>Orange Juice</li>
        <li>Peaches</li>
        <Cucumbers />
        <Kale /> 
        <li>{props.todos[0]}</li>
        <li>{props.todos[1]}</li>
        <li>{props.todos[2]}</li>
    </ul>
    // </div>
);

*/

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.groceryItem}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.groceryItems.map( (groceryItem) =>
            <GroceryListItem groceryItem={groceryItem} />
        )}
    </ul>
);

// var App = () => (
//     <div>
//         <h1>My Grocery List</h1>
//         <GroceryList todos={['apples', 'burritos', 'mandu']}/>
//     </div>
// )

ReactDOM.render(<GroceryList groceryItems={['apples', 'burritos', 'mandu']}/>, document.getElementById("app"));
// var GroceryList = (props) => {
//     var onListItemClick = (even) => {
//         console.log('I got clicked');
//     };

//     return (
//       <ul>
//         <li onClick={onListItemClick}>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>
//       </ul>
//     );
// };

// var GroceryListItem = () => (
//     <div>
//         <h1>My Grocery List</h1>
//         <GroceryList todos={['apples', 'burritos', 'mandu']}/>
//     </div>
// )

// var Cucumbers = () => (
//     <div>
//         <li>Cucumbers</li>
//     </div>
// );
// var Kale = () => (
//     <div>
//         <li>Kale</li>
//     </div>
// );

