import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  randomNum = () => {
    this.setState({num: this.getRandomNumber()})
  }

  render() {
    const {num} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="txt-1">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.randomNum}>
            Generate
          </button>
          <p className="heading txt-2">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
