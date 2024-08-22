import { useState } from 'react';

const UpdatingButton = ({ data }) => {

  // Using state to update the button text
  const [Name, setName] = useState("Ali Dil Wala");

  console.log(Name)

  // let Name = "Ali Dil Wala";


  return (
    //   <button onClick={() => {
    //     console.log(Name);
    //     Name = data;
    //     console.log(Name);

    // }}>{Name}</button>
    <button onClick={() => {
      // console.log(Name);
      setName(data);
      console.log(Name + "1");

    }}>{Name}</button>


  );
}

export default UpdatingButton;