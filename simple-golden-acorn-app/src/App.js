import React, { Component } from 'react'
import './App.css'
import Counter from './Counter.js'
import Button from './Button.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
    this.increaseCounter = this.increaseCounter.bind(this)
    this.decreaseCounter = this.decreaseCounter.bind(this)
  }
  increaseCounter(){
    this.setState({
       count: this.state.count + 1
      })
  }
  decreaseCounter(){
    if(this.state.count>0){
      this.setState({
        count: this.state.count - 1
       })
    }
  }

  render() {
    return (
      <div>
      <Button name="Increase" valueHandler={this.increaseCounter}/>
      <Counter count={this.state.count}/>
      <Button name="Decrease" valueHandler={this.decreaseCounter}/>
    </div>

    )
  }
}

export default App
