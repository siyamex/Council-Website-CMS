import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageForms = () => {
  const [forms, setForms] = useState([]);
  const [newForm, setNewForm] = useState({ title: '', fields: [] });
  const [newField, setNewField] = useState({ label: '', type: 'text' });

  useEffect(() => {
    const fetchForms = async () => {
      const response = await axios.get('/api/forms');
      setForms(response.data);
    };
    fetchForms();
  }, []);

  const addField = () => {
    setNewForm({ ...newForm, fields: [...newForm.fields, newField] });
    setNewField({ label: '', type: 'text' });
  };

  const handleSaveForm = async () => {
    const response = await axios.post('/api/forms', newForm);
    setForms([...forms, response.data]);
    setNewForm({ title: '', fields: [] });
  };

  return (
    <div className="manage-forms">
      <h2>Manage Forms</h2>
      <h3>Create New Form</h3>
      <input
        type="text"
        placeholder="Form Title"
        value={newForm.title}
        onChange={(e) => setNewForm({ ...newForm, title: e.target.value })}
      />
      <div>
        <input
          type="text"
          placeholder="Field Label"
          value={newField.label}
          onChange={(e) => setNewField({ ...newField, label: e.target.value })}
        />
        <select
          value={newField.type}
          onChange={(e) => setNewField({ ...newField, type: e.target.value })}
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="textarea">Textarea</option>
        </select>
        <button onClick={addField}>Add Field</button>
      </div>
      <button onClick={handleSaveForm}>Save Form</button>
      <h3>Existing Forms</h3>
      <ul>
        {forms.map(form => (
          <li key={form._id}>{form.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageForms;