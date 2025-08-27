import React from 'react'
import Voitures from './components/Voitures'
import viteLogo from '/vite.svg'
import './App.css'

class App extends React.Component {
  state = {
    title: "Mon catalogue Voirutes",
  }

  render() {
    return (
      <div>
        <Voitures title={this.state.title} >
        </Voitures>
      </div>
    )
  }
}

export default App;