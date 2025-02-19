import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CouncilInformation = () => {
  const [members, setMembers] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchCouncilInfo = async () => {
      const membersResponse = await axios.get('/api/council-members');
      const meetingsResponse = await axios.get('/api/council-meetings');
      setMembers(membersResponse.data);
      setMeetings(meetingsResponse.data);
    };
    fetchCouncilInfo();
  }, []);

  return (
    <div className="council-info">
      <h2>Council Information</h2>
      <h3>Members</h3>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.name} - {member.role}</li>
        ))}
      </ul>
      <h3>Meetings</h3>
      <ul>
        {meetings.map(meeting => (
          <li key={meeting.id}>{meeting.date} - {meeting.agenda}</li>
        ))}
      </ul>
    </div>
  );
};

export default CouncilInformation;