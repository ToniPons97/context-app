import React from "react";
import { LanguageContext } from "./LanguageContext";

const languages = {
    EN: {
        selectedLang: 'The selected language is: '
    },
    IT: {
        selectedLang: 'La lingua selezionata è: '
    },
    ES: {
        selectedLang: 'El idioma seleccionado es: '
    }
}

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {
                    language => <p>{languages[language].selectedLang} <strong>{language}</strong>.</p>
                }
            </LanguageContext.Consumer>
        );
    }
}