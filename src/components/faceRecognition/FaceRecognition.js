import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="faceRecognition">
      <img src={imageUrl} alt="Face Recognition"/>
    </div>
  );
};

export default FaceRecognition;