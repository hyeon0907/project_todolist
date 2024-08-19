import { useEffect, useState } from "react";

function Aaa(props) {
    const user = {
        username : "aaa",
        password: "1234"
    }
    const { username = "test", password, name = "김준일"} = user;
    console.log(username);
    console.log(password);
    console.log(name);
    const [ num , setNum ] = useState(0);

    console.log(user);

    // useEffect(() => {
    //     console.log("a1" , num);
    // });
    // console.log("a2", parseInt(num) + 100);

    const handleClick = (e) => {
        setNum(e.target.value);
        
    }
    return (
        <div>
            <h1>{num}</h1>
            <input type="text" onChange={handleClick} value={num}/>
            {/* /*<Test/>*/}
        </div>
    );
}

export default Aaa;