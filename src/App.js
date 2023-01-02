import React from 'react';
import './App.css';
import { DisplayLanguage } from './components/DisplayLanguage';
import { LanguageContext } from './components/LanguageContext';


export class App extends React.Component {
  state = {
    language: 'en'
  }
  
  handleLangSelection = (event) => {
    this.setState({
        language: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Language Selection</h1>
        <select value={this.state.language} onChange={this.handleLangSelection}>
            <option value='en'>English</option>
            <option value='it'>Italiano</option>
            <option value='es'>Español</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );

  }
}

export default App;
