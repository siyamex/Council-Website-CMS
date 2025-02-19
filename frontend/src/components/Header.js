import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/logo.png';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Council Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/council-information">{t('council_information')}</Link></li>
          <li><Link to="/public-services">{t('public_services')}</Link></li>
          <li><Link to="/news-announcements">{t('news_announcements')}</Link></li>
          <li><Link to="/downloads">{t('downloads')}</Link></li>
          <li><Link to="/contact-information">{t('contact_information')}</Link></li>
          <li><Link to="/community-engagement">{t('community_engagement')}</Link></li>
          <li><Link to="/tourism-culture">{t('tourism_culture')}</Link></li>
          <li><Link to="/event-calendar">{t('event_calendar')}</Link></li>
          <li><Link to="/admin">{t('admin_dashboard')}</Link></li>
        </ul>
      </nav>
      <LanguageSelector />
    </header>
  );
};

export default Header;