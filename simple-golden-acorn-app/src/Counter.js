import React, { Component } from 'react'

class Counter extends Component {
    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
            </>
        )
    }
}

export default Counter
