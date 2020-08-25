import React, {Component} from 'react'
import Table from './components/Table'

class App extends Component {
  
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Web IT'
      }
    ]
  };
  
  removeCharacter = (index) => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    });
  } 

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {

    const { characters } = this.state;

    return (
        <div className="container">
          <h1>React Form</h1>
          <p>Add a character with a name and a job to the table.</p>
          <Table 
            characterData={characters} 
            removeCharacter={this.removeCharacter} 
          />
          <h3>Add New</h3>
        </div>
      )
    }
  }

export default App