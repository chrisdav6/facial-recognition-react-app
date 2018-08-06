import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  if(imageUrl !== "") {
    return (
      <div className="faceRecognition">
        <img id="inputImage" src={imageUrl} alt="Face Recognition" />
        <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
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