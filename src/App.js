import React from 'react';
import './App.css';
import { DisplayLanguage } from './components/DisplayLanguage';
import { LanguageContext } from './components/LanguageContext';


export class App extends React.Component {
  state = {
    language: 'EN'
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
            <option value='EN'>English</option>
            <option value='IT'>Italiano</option>
            <option value='ES'>Español</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );

  }
}

export default App;
