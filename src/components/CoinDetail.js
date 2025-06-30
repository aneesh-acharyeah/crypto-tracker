import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CoinDetail.css';

const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => setCoin(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!coin) return <p>Loading...</p>;

  return (
    <div className="coin-detail">
      <Link to="/">← Back</Link>
      <h2>{coin.name}</h2>
      <img src={coin.image.large} alt={coin.name} />
      <p dangerouslySetInnerHTML={{ __html: coin.description.en?.slice(0, 500) || "No description." }} />
      <p>🪙 Symbol: {coin.symbol.toUpperCase()}</p>
      <p>💵 Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
      <p>📊 Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
    </div>
  );
};

export default CoinDetail;
