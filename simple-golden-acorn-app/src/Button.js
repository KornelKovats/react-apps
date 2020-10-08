import React, { Component } from 'react'

class button extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.valueHandler}>{this.props.name}</button>
            </>
        )
    }
}

export default button
