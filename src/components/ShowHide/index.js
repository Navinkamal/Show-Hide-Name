// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  onFirst = () => {
    this.setState(prevState => ({
      first: !prevState.first,
    }))
  }

  onLast = () => {
    this.setState(prevState => ({
      last: !prevState.last,
    }))
  }

  render() {
    const {first, last} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading"> Show/Hide</h1>
        <div className="card-btn">
          <div className="first-btn">
            <button type="button" className="btn" onClick={this.onFirst}>
              Show/Hide Firstname
            </button>
            {first && <p className="result-card">Joe</p>}
          </div>
          <div className="first-btn">
            <button type="button" className="btn" onClick={this.onLast}>
              Show/Hide Lastname
            </button>
            {last && <p className="result-card">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
