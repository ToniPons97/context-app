import React, { useContext } from "react";
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

export const DisplayLanguage = () => {
    const language = useContext(LanguageContext);    

    return <p>{languages[language].selectedLang} <strong>{language}</strong>.</p>;
}

export default DisplayLanguage;