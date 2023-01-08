import React, { useState } from 'react';
import './App.css';
import { DisplayLanguage } from './components/DisplayLanguage';
import { LanguageContext } from './components/LanguageContext';


export const App = () => {
  const [language, setLanguage] = useState('EN');
  
  const handleLangSelection = (event) => setLanguage(event.target.value);

  return (
    <div>
      <h1>Language Selection</h1>
      <select value={language} onChange={handleLangSelection}>
          <option value='EN'>English</option>
          <option value='IT'>Italiano</option>
          <option value='ES'>Español</option>
      </select>
            
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
