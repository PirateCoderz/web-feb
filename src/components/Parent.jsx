import Child from './Child';
import { useState } from 'react';
import UpdatingButton from './UpdatingButton';
import Counter from './Counter';

const Parent = () => {
    // use state
    const [d, setd] = useState("Bruce");

    let name = "Alice";

    let handleClick = () => {
        alert("Button is clicked");
    }

    let data = { name: "Ali", age: 25 };
    return (
        <div>


            <h1>Hello, {name + d}</h1>
            <h2>Name, {data.name}</h2>
            <h3>Age, {data.age}</h3>
<Counter />

            <button onClick={() => {setd("Truce")}}>Clicked</button>
            <Child />

            <UpdatingButton data={"Azaad Chae Wala."} />
            <UpdatingButton data={"Ahmad Dil Wala."} />
            <UpdatingButton data={"Umar Dil Wala."} />
            <UpdatingButton data={"Nadeem Nani Wala."} />

        </div>
    );
}

export default Parent;