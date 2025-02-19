import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/users">Manage Users</Link></li>
        <li><Link to="/admin/events">Manage Events</Link></li>
        <li><Link to="/admin/news">Manage News</Link></li>
        <li><Link to="/admin/documents">Manage Documents</Link></li>
        <li><Link to="/admin/forms">Manage Forms</Link></li>
        <li><Link to="/admin/surveys">Manage Surveys</Link></li>
        <li><Link to="/admin/analytics">View Analytics</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;