import React from 'react';


const Greet = (props)=>{
    return(
        <div>
            <h1>Welcome, {props.name}</h1>
            <h2>{props.msg}</h2>
        </div>
    )
}

export default Greet;