// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: false, second: false}

  FirstNameButton = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  LastNameButton = () => {
    this.setState(prevState => ({second: !prevState.second}))
  }

  render() {
    const {first, second} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="card-container">
            <button
              type="button"
              onClick={this.FirstNameButton}
              className="button"
            >
              Show/Hide Firstname
            </button>
            {first && <p className="name">Joe</p>}
          </div>

          <div className="card-container">
            <button
              type="button"
              className="button"
              onClick={this.LastNameButton}
            >
              Show/Hide Lastname
            </button>
            {second && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
