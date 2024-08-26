

import  axios from "axios";


function CounterItem(props) {
    const {value,_id,counterDispatch}=props

    const handleClickINC=()=>{
        const newData={
            value:value+1
        }
        axios.put("http://localhost:5000/api/counter/"+_id,newData)
        .then(res=>{
            // const result=res.data
           // console.log(result)    `
            counterDispatch({type:"INC",payload:_id})
        })
    }

    const handleClickDEC=()=>{
        const newdata={
            value:value-1
        }
        axios.put("http://localhost:5000/api/counter/"+_id,newdata)
        .then(res=>{
            // const result=res.data
            //console.log(result)
            counterDispatch({type:"DEC",payload:_id})
        })
    }

    const handelRemove=()=>{
        axios.delete("http://localhost:5000/api/counter/"+_id)
        .then(res=>{
            const result=res.data
            console.log(result)
            counterDispatch({type:"REMOVE",payload:_id})
        })
    }

    const handleRESET=()=>{
        const newdata={
            value:0
        }
        axios.put("http://localhost:5000/api/counter/"+_id,newdata)
        .then(res=>{
            const result=res.data
            console.log(result)
            counterDispatch({type:"RESET",payload:_id})
        })
    }
    return (
        <div>
            <li>{value} <button onClick={handleClickINC}>+</button>
            <button onClick={handleClickDEC}>-</button>
            <button onClick={handleRESET}>Reset</button>
            <button onClick={handelRemove} >Remove</button></li>
           
        </div>
    );
}

export default CounterItem;
