import React, { useRef, useState } from "react";
import Item from "./item";
function Todo(){
    let [msg,setMsg]=useState([])

    let a=useRef(null)
    function add(){
        let message=a.current.value;
        if(message!=""){
            setMsg((prev)=>[...prev,message]);
        }
        a.current.value=""
    }
    return(
        <>    
        <h1>Todo App</h1>
        <input type="text" ref={a}></input><br>
        </br>
        <button onClick={add}>ADD</button>
        {msg.map((val,index)=><Item message={val} key={index} here={setMsg}  id={index}></Item>)}
        </>
    )
}
export default Todo
