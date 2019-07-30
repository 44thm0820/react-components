class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        
        // `state` is just an object literal
        this.state = {
            // done: false
            boldened: false
        };
    }

    // When a list item is hovered, we will toggle the `boldened`
    // boolean, and our component's `render` method will run again
    onListItemHover() {
    // onListItemClick() {
      this.setState({
        boldened: !this.state.boldened
        // done: !this.state.done
      });
    }

    // https://www.w3schools.com/jsref/event_onmouseover.asp
    // Example
    // Execute a JavaScript when moving the mouse pointer onto an image:
    // <img onmouseover="bigImg(this)" src="smiley.gif" alt="Smiley">

    render() {
      // Making the style conditional on our `state` lets us
      // update it based on user interactions.
      var style = {
        // textDecoration: this.state.done ? 'line-through' : 'none'
        fontWeight: this.state.boldened ? 'bold' : 'normal'
      };

      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
      return (
        // <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
        <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
      );
    }
    //     return (
    //         <li>{this.props.groceryItem}</li>
    //     );
    // }
}

var GroceryList = (props) => (
    <ul>
        {props.groceryItems.map( (groceryItem) =>
            <GroceryListItem groceryItem={groceryItem} />
            )}
    </ul>
);
ReactDOM.render(<GroceryList groceryItems={['apples', 'burritos', 'mandu']}/>, document.getElementById("app"));

// below is solution to 2nd to last exercise.
// class GroceryListItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <li>{this.props.groceryItem}</li>
//         );
//     }
// }

// var GroceryList = (props) => (
//     <ul>
//         {props.groceryItems.map( (groceryItem) =>
//             <GroceryListItem groceryItem={groceryItem} />
//         )}
//     </ul>
// );
// ReactDOM.render(<GroceryList groceryItems={['apples', 'burritos', 'mandu']}/>, document.getElementById("app"));
// concluding solution to 2nd to last exercise.


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


// var App = () => (
//     <div>
//         <h1>My Grocery List</h1>
//         <GroceryList todos={['apples', 'burritos', 'mandu']}/>
//     </div>
// )

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

