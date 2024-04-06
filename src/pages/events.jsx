// Events.jsx

// import React from 'react';

const Events = () => {
  const redirectToDrive = () => {
    window.location.href = "https://drive.google.com/file/d/13Gm_BHjIl84rxEwLdDYcGcm8S1mudJGu/view?usp=drive_link";
  };

  return (
    <div>
      <h1 style={{ color: 'blue' }}>Read Button</h1>
      <p>Click the button to download the file from Google Drive:</p>
      <button onClick={redirectToDrive} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Download File</button>
    </div>
  );
};

export default Events;
