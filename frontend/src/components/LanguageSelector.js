import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    toggleLanguage(lang);
  };

  return (
    <select onChange={handleChange} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="dv">ދިވެހި</option>
    </select>
  );
};

export default LanguageSelector;