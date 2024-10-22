// src/App.tsx
import React from 'react';
import VideoChat from './components/VideoChat';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Video Chat App</h1>
      <VideoChat />
    </div>
  );
};

export default App;
