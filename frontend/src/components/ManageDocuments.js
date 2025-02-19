import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageDocuments = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await axios.get('/api/documents');
      setDocuments(response.data);
    };
    fetchDocuments();
  }, []);

  return (
    <div className="manage-documents">
      <h2>Manage Documents</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(document => (
            <tr key={document._id}>
              <td>{document.title}</td>
              <td>{document.description}</td>
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

export default ManageDocuments;