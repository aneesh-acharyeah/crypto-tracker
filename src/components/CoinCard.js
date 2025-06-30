import React from 'react';
import { Link } from 'react-router-dom';
import './CoinCard.css';

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} className="coin-card">
      <img src={coin.image} alt={coin.name} />
      <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
      <p>💵 ${coin.current_price.toLocaleString()}</p>
      <p style={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </Link>
  );
};

export default CoinCard;
