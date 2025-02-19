import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('/api/news');
      setNews(response.data);
    };
    fetchNews();
  }, []);

  return (
    <div className="manage-news">
      <h2>Manage News</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map(newsItem => (
            <tr key={newsItem._id}>
              <td>{newsItem.title}</td>
              <td>{newsItem.author}</td>
              <td>{newsItem.date}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageNews;