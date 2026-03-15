import React, { useState } from 'react';
import Home from './components/Hero/home';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
