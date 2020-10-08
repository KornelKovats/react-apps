import React, { useState } from "react";


export default function(){
    const [counter, setCounter] = useState(0);
    return(
        <div className="counter">
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <p>{counter}</p>
            <button onClick={() => {(counter>0) ? setCounter(counter - 1) : setCounter(counter)}}>Decrease</button>
        </div>
    )
}

/* export default class CounterClass extends React.Component{
    ctor(){
        super(props);
        this.state = {
            counter: 0
        }
    }

    setCounter(newValue){
        this.setState({ 
            counter: newValue})
    }
    render(){
        return(
            <div className="counter">
                <button onClick={() => setCounter(this.state.counter + 1)}>Increase</button>
                <p>{counter}</p>
                <button onClick={() => {(this.state.counter>0) ? setCounter(this.state.counter - 1) : setCounter(this.state.counter)}}>Decrease</button>
            </div>
        )
    }
} */