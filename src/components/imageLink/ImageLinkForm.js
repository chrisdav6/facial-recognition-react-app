import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div className="imageLinkForm">
      <p class="intro">This magic brain app will detect faces in your pictures! Give it a try, upload a photo!</p>
      <div className="form">
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter Image URL"/>
        <button className="uploadBtn">Upload Image</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;