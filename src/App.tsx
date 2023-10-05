import React, { useState, useEffect } from 'react';

import { Indicator } from './components/Indicator/Indicator';

import './App.css';

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setValue(Math.random() * 130), 3000);
    return () => clearInterval(interval);
  }, [setValue]);

  return (
      <div className="App">
        <Indicator current={value} min={10} max={120} />
      </div>
  );
}

export default App;
