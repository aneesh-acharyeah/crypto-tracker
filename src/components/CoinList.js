import React from 'react';
import CoinCard from './CoinCard';
import './CoinList.css';

const CoinList = ({ coins }) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;
