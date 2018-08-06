import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
  if(imageUrl !== "") {
    return (
      <div className="faceRecognition">
        <img src={imageUrl} alt="Face Recognition" />
      </div>
    );
  } else {
    return (
      <div className="faceRecognition">
      </div>
    );
  }
  
};

export default FaceRecognition;