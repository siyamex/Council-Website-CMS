import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AccessibilityFeatures = () => {
  const { t } = useTranslation();
  const [textSize, setTextSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  const increaseTextSize = () => {
    setTextSize(textSize + 2);
  };

  const decreaseTextSize = () => {
    setTextSize(textSize - 2);
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div className={`accessibility-features ${highContrast ? 'high-contrast' : ''}`} style={{ fontSize: `${textSize}px` }}>
      <h2>{t('accessibility_features')}</h2>
      <button onClick={increaseTextSize}>{t('increase_text_size')}</button>
      <button onClick={decreaseTextSize}>{t('decrease_text_size')}</button>
      <button onClick={toggleHighContrast}>{t('toggle_high_contrast')}</button>
    </div>
  );
};

export default AccessibilityFeatures;