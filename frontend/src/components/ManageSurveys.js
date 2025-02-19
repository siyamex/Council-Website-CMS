import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSurveys = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      const response = await axios.get('/api/surveys');
      setSurveys(response.data);
    };
    fetchSurveys();
  }, []);

  return (
    <div className="manage-surveys">
      <h2>Manage Surveys</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Questions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map(survey => (
            <tr key={survey._id}>
              <td>{survey.title}</td>
              <td>{survey.questions.map(question => question.question).join(', ')}</td>
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

export default ManageSurveys;