import React, { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState('Loading backend response...');

  useEffect(() => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .catch((err) => setResponse('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>React + Node.js + Postgres + Nginx</h1>
      <p>Status from Express Server:</p>
      <h3 style={{ color: 'green' }}>{response}</h3>
    </div>
  );
}

export default App;