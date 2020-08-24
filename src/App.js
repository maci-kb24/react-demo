import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {

      const characters = [
        {
          name: 'Mark',
          job: 'UI Developer',
        },
        {
          name: 'Mac',
          job: 'Front End Developer',
        },
        {
          name: 'Dee',
          job: 'Actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        }
      ]

      return(
        <div className="container">
          <Table characterData={characters} />
        </div>
      )
    }
  }

export default App