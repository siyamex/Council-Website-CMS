import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InteractivePolls = () => {
  const [polls, setPolls] = useState([]);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await axios.get('/api/polls');
      setPolls(response.data);
    };
    fetchPolls();
  }, []);

  const handleVote = async (pollId) => {
    await axios.post(`/api/polls/${pollId}/vote`, { option: selectedOption });
    setSelectedOption('');
    setSelectedPoll(null);
  };

  return (
    <div className="interactive-polls">
      <h2>Interactive Polls</h2>
      <ul>
        {polls.map(poll => (
          <li key={poll.id} onClick={() => setSelectedPoll(poll)}>
            {poll.title}
          </li>
        ))}
      </ul>
      {selectedPoll && (
        <div>
          <h3>{selectedPoll.title}</h3>
          {selectedPoll.options.map(option => (
            <div key={option}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label>{option}</label>
            </div>
          ))}
          <button onClick={() => handleVote(selectedPoll.id)}>Vote</button>
        </div>
      )}
    </div>
  );
};

export default InteractivePolls;