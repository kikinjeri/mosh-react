function ListGroup() {
  let items = ["New York", "London", "Paris", "Tokyo", "Nairobi"];

  items = [];
 // const message = items.length === 0 ? <p> No item found</p> : null;
  
  return (
    <>
      <h1>List</h1>
      <p>No item found</p>
    </>
  );
  return (
    <>
      <h1>List</h1>
    
      {items.length === 0 && <p>No items found</p>}
      
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
