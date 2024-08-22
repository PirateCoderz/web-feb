const States = () => {

  let name = "Raza"


  const handleSubmit = (e) =>  {
    e.preventDefault();
    console.log(e)
  }

  const inputChangeHandler = (e) => {
    console.log(e)
  }



  return (
    <div>
      <p>{name}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" value={name} onChange={inputChangeHandler} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default States;