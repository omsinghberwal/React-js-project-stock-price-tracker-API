
import React, { useState } from 'react';
import StockPrice from './components/StockPrice';

function App() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Stock Price Tracker</h1>
      <StockPrice />
    </div>
  );
}

export default App;
