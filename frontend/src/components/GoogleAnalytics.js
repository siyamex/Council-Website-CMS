import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [trackingId]);

  return null;
};

export default GoogleAnalytics;