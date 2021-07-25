import React, { useState, useEffect } from 'react';
import buildPathObject from '../../utils/buildPathObject';
import check from '../../../assets/folder-with-checkmark.png';

// Create functional component to return import button and functionality for state change
const FileImport = (props:ImportProps) => {

  // This function will set the current state, when the import button is pressed.
  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

    // Attempt to build the PathObject from the Files in State
    buildPathObject(e.target.files as ServerDirectory)
    // When sucessfully built, update the state with the new pathObject
      .then((pathObject) => {
        props.setFileState(pathObject as PathObject, check);
      })
    // When unsucessfully built, attempt to update the state with the new pathObject
      .catch((pathObject) => {
        props.setFileState(pathObject as PathObject, check);
      });
  };

  return (
    <div id="hiddenImport">
      <input type="file" className="custom-file-input" accept="js/plain" multiple webkitdirectory="" id="fileURL" onChange={onFileUpload} />
    </div>
  );
};

export default FileImport;
