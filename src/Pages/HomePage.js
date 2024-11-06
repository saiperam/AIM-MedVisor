import React, { useState } from 'react';

const HomePage = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles(selectedFiles);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1>Welcome MedVisor</h1>
      <input
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        onChange={handleFileChange}
      />
      <h2>Uploaded Files:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {files.map((fileObj, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <p>{fileObj.file.name}</p>
            <img
              src={fileObj.preview}
              alt="Preview"
              style={{ width: '200px', height: 'auto', borderRadius: '5px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
