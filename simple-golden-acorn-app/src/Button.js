import React from 'react'

export default function button(props) {
    return (
        <div>
            <button onClick={props.valueHandler}>{props.name}</button>
        </div>
    )
}
