
import React, { useState } from 'react';
import axios from 'axios';

function StockPrice() {
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState(null);
  const [error, setError] = useState('');

  const fetchStockPrice = async () => {
    setError('');
    setPrice(null);
    if (!symbol) {
      setError('Please enter a stock symbol.');
      return;
    }
    try {
      const response = await axios.get(`https://api.twelvedata.com/price?symbol=${symbol}&apikey=c692f53944fb4c39a9f7c404432d3bd5`);
      setPrice(response.data.price);
    } catch (err) {
      setError('Error fetching stock price. Please check the symbol and try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
      />
      <button onClick={fetchStockPrice} style={{ marginLeft: '10px' }}>
        Get Price
      </button>
      <div style={{ marginTop: '20px' }}>
        {price && <h2>Price: ${price}</h2>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default StockPrice;
