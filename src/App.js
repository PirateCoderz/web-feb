import './App.css';
import Card from './card';
import States from './state';

const App = () => {


  let name = "Ahmad"
  let str = "This is a string";

  let h1class = "heading";
  let data = "my name is " + name;

  // you can use template literals in js to make it more readable
  let data2 = `my name is ${name}`;

  // you can use backticks to create multi line strings
  let data3 = `my name is ${name}`;


  // in return html sometimes you use curly braces called js expression. in curly braces you can use javascript code
  return (
    <div>
      <h1 className={h1class} id=''>This is Heading of my first React App</h1>
      <States />
      {/* <p >{name}</p> */}

      <Card id='card1' data={"Goto"} />
      <Card id="card2" data={"Goto"} />
    </div>

  )
}

export default App;



// how to pass props form child to parent
// will be get in next class