import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import Support from './components/Support';
import './styles/main.css';

function App() {
  return (
    <Router>
      <GoogleAnalytics trackingId="YOUR_GOOGLE_ANALYTICS_TRACKING_ID" />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/support" component={Support} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;