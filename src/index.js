import React from "react"
import ReactDOM from "react-dom"
import Employees from './components/employees'

class App extends React.Component {
  render() {
    return <div>
      <div className="container">
        <h1>Hello GlobalSkills</h1>
        <Employees/>
      </div>
    </div>
  }
}

let root = document.getElementById("app")

ReactDOM.render(<App name="Yomi" />, root)
