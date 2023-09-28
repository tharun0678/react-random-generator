// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRand = () => {
    const randomNum = Math.random() * 100

    const number = Math.ceil(randomNum)

    this.setState({randomNumber: number})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.generateRand} type="button">
            Generate
          </button>
          <h1 className="rand">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
