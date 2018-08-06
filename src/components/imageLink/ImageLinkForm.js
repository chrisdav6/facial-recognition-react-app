import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="imageLinkForm">
      <p className="intro">This magic brain app will detect faces in your pictures. Give it a try!</p>
      <div className="form">
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter Image URL" onChange={onInputChange}/>
        <button className="uploadBtn" onClick={onButtonSubmit}>Detect!</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;