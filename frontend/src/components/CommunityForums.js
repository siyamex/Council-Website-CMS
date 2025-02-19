import React, { useState } from 'react';

const CommunityForums = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setNewPost('');
  };

  return (
    <div>
      <h2>Community Forums</h2>
      <p>Allow residents to share their opinions and ask questions.</p>
      <div className="forum">
        <h3>Forum Posts</h3>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your post here"
        />
        <button onClick={handlePostSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CommunityForums;