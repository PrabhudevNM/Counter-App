
import axios from 'axios';
import React, { useState } from 'react';


export default function CounterForm(props) {
    const { counterDispatch }=props
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form={
            value:Number(value)
        }
        axios.post("http://localhost:5000/api/counter",form)
        .then(res=>{
        const result=res.data
        console.log(result)
        counterDispatch({type:"ADD",payload:result})
         
        //making empty form
        setValue('')
        
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter a value"
            />  
            <button type="submit">Add Counter</button>
        </form>
    );
}


