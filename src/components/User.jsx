import { useState } from "react";

const User = (props)=>{

    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(1);

    const {name, location, contact} = props;

    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: {contact}</h2>
        </div>
    );

}

export default User;