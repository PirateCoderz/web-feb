import Button from "./Button";

const Card = ({id, data}) => {

  let value = `${data} ${id}`;
  let name = "Ahmad"

  return ( 
    <div className="card" id={id}>
      <img src="https://picsum.photos/293/300" alt="Card cap" />
      {/* <img src="/logo512.png" alt="Card cap" /> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button data={value} link={`#${id}`} />
      </div>
    </div>
   );
}
 
export default Card;

