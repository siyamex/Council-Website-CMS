import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="quick-links">
      <h2>{t('quick_links')}</h2>
      <ul>
        <li><Link to="/news-announcements">{t('news_announcements')}</Link></li>
        <li><Link to="/events">{t('events')}</Link></li>
        <li><Link to="/public-services">{t('public_services')}</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;