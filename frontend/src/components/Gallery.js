import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get('/api/photos');
      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="photos">
        {photos.map(photo => (
          <img key={photo.id} src={photo.url} alt={photo.description} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;