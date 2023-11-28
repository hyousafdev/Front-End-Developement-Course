import React from 'react';
import './App.css';
import DocTitleOne from './HooksComponents/DocTitleOne';
import DocTitleTwo from './HooksComponents/DocTitleTwo';



function App() {
  return (
    <div className="App">
      {/* with these two functional component the document update at the same time */}
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default App;
