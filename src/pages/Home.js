import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinList from '../components/CoinList';
import './Home.css';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100'
      )
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Crypto Tracker 💰</h1>
      <input
        type="text"
        placeholder="Search for a coin..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <CoinList coins={filteredCoins} />
    </div>
  );
};

export default Home;
