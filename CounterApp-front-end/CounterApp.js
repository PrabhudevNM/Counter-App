import axios from "axios";
import { useReducer,useEffect } from "react";
import CounterList from "./CounterList";
import CounterForm from "./CounterForm";



const CounterReducer=(state,action)=>{
  if(action.type==="SET-COUNTER"){
    return [...action.payload]
  }else if(action.type==="INC"){
    return state.map(ele=>{
        if(ele._id===action.payload){
            return {...ele,value:ele.value+1}
        }else{
            return {...ele}
        }
    })
  }else if(action.type==="REMOVE"){
    return state.filter(ele=>{
        return ele._id!==action.payload
    })
  }else if(action.type==="ADD"){
    return [...state,action.payload]
  }
  else if(action.type==="DEC"){
    return state.map(ele=>{
        if(ele._id===action.payload){
            return {...ele,value:ele.value-1}
        }else{
            return {...ele}
        }
    })
  }
  else if(action.type==="RESET"){
    return state.map(ele=>{
        if(ele._id===action.payload){
            return {...ele,value:0}
        }else{
            return {...ele}
        }
    })
  }
}

 export default function CounterApp(){

const [counter,counterDispatch]=useReducer(CounterReducer,[])

useEffect(()=>{
    axios.get("http://localhost:5000/api/counter")
    .then((res)=>{
        const result=res.data
        console.log(result)
        counterDispatch({type:"SET-COUNTER",payload:result})
    })
},[])
console.log(counter)


return(
    <div>
       <h1>Counter App</h1>
       {/* <h2>Counter List-{counter.length}</h2> */}
       <CounterList counter={counter} counterDispatch={counterDispatch}/>
       <CounterForm counterDispatch={counterDispatch}/>
    </div>
)
 }


