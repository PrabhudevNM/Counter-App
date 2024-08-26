// src/CounterList.js
import React from 'react';
import CounterItem from './CounterItem';

export default function CounterList(props) {
    const {counter,counterDispatch}=props
    return (
        <div>
            {counter.map((ele) => (
                <CounterItem key={ele._id}
                  {...ele} counterDispatch={counterDispatch}
                />
            ))}
        </div>
    );
}


