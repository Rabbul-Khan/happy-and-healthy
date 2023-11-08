import React from 'react';

const Settings = () => {
  return (
    <div className="hidden lg:block bg-blue-500 lg:col-start-9 lg:col-end-11 p-5">
      <div>Settings</div>
      <div>
        Paragraph font size
        <input type="range" />
      </div>
      <div>
        Choose vitamin type
        <div>Dropdown Menu</div>
      </div>
      <div>Turn off subtitle</div>
    </div>
  );
};

export default Settings;
