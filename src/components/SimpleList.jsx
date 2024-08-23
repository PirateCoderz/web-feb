function SimpleList() {
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'Guava',
    'Peach',
    'Berry',
    'Cherry',
    'Strawberry'
  ];
  return (
    // Use a map function to create a list of li elements
    // Each li element will have the text content from the items array
    // And each li element will also have a unique key prop to help React identify which items have changed, are added, or are removed.
    // The key prop is required when creating lists of elements with React.
    <>
      <h1>List of Fruits</h1>
      <ul>
        {/* The map function will return a new array with the same length as the input array */}
        {items.map(function (n) {
          return <li key={n}><a href={"/" + n}>{n}</a></li>;
        })}
      </ul>
    </>
  );
}
export default SimpleList;
