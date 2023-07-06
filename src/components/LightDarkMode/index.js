// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {DarkMode: true}

  changeMode = () => {
    const {DarkMode} = this.state
    if (DarkMode === true) {
      this.setState({DarkMode: false})
    } else {
      this.setState({DarkMode: true})
    }
  }

  render() {
    const {DarkMode} = this.state
    let modeType
    const changingModeText = DarkMode
      ? ((modeType = 'dark-mode'), 'Light Mode')
      : ((modeType = 'light-mode'), 'Dark Mode')

    return (
      <div className="container">
        <div className={modeType}>
          <h1 className="heading">Click To Change Mode</h1>

          <button className="button" onClick={this.changeMode} type="button">
            {changingModeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
