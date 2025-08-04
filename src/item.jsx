import React from "react";
function Item(prop){
    function remove(){
        console.log("works")
        prop.here((prev)=>prev.filter((val)=>val!=prop.message))
        console.log(prop.here)
    }
    return(
        <>
        <div style={{display:"flex"}}> 
        <p>{prop.message}</p>
        <button onClick={remove}>Remove</button>
        </div>
        </>
    )
}
export default Item