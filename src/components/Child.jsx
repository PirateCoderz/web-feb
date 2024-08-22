const Child = ({onClick=() => {alert("No value is passed.")}}) => {
  return (
    <div>
      <h1>This is Child Component.</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

// this DefaultProps method is depriciated and not be supported in future updates. Instead use default props while destructuring and accessing in parenthesis
// Child.defaultProps = {
//   onClick: () => {alert("No value is passed.")}
// }


// Child.PropTypes = {
//   onClick: PropTypes.func
// }


export default Child;