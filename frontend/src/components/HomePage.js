import React from 'react';
import Banner from './Banner';
import QuickLinks from './QuickLinks';
import Events from './Events';
import Gallery from './Gallery';
import CouncilInformation from './CouncilInformation';
import PublicServices from './PublicServices';
import NewsAnnouncements from './NewsAnnouncements';
import Downloads from './Downloads';
import ContactInformation from './ContactInformation';
import CommunityEngagement from './CommunityEngagement';
import TourismCulture from './TourismCulture';
import EventCalendar from './EventCalendar';
import InteractiveMaps from './InteractiveMaps';
import AccessibilityFeatures from './AccessibilityFeatures';
import SearchFunctionality from './SearchFunctionality';
import MobileFriendly from './MobileFriendly';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <QuickLinks />
      <Events />
      <Gallery />
      <CouncilInformation />
      <PublicServices />
      <NewsAnnouncements />
      <Downloads />
      <ContactInformation />
      <CommunityEngagement />
      <TourismCulture />
      <EventCalendar />
      <InteractiveMaps />
      <AccessibilityFeatures />
      <SearchFunctionality />
      <MobileFriendly />
    </div>
  );
};

export default HomePage;