import { useEffect, useState } from "react";
import Test from "./Test";

function Aaa(props) {
    const [ num , setNum ] = useState(0);

    useEffect(() => {
        console.log("a1" , num);
    });
    console.log("a2", parseInt(num) + 100);

    const handleClick = (e) => {
        setNum(e.target.value); 
    }
    return (
        <div>
            <h1>{num}</h1>
            <input type="text" onChange={handleClick} value={num}/>
            <Test/>
        </div>
    );
}

export default Aaa;