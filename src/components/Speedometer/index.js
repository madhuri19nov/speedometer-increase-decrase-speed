// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onDecreaseSpeed = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  onIncreaseSpeed = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onIncreaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="break-button"
            type="button"
            onClick={this.onDecreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
