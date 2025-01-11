import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PriceCard from "./components/PriceCard";
import TradingViewWidget from "./components/TradingViewWidget";
import TrendingCoins from "./components/TrendingCoins";
import AboutSection from "./components/AboutSection";
import PerformanceSection from "./components/PerformanceSection";
import TeamSection from "./components/TeamSection";
import TokenomicsSection from "./components/TokenomicsSection";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

export default function Home() {
  const [coinData, setCoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const { coin } = useParams();
  const currentCoin = coin || "bitcoin";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price`,
          {
            params: {
              ids: currentCoin,
              vs_currencies: "usd,inr",
              include_24hr_change: true,
            },
          }
        );
        setCoinData(response.data[currentCoin]);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };
    fetchData();
  }, [currentCoin]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };
    fetchTrendingCoins();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-6 py-6">
        {coinData && (
          <PriceCard
            price={coinData}
            coinName={currentCoin}
            currency="usd"
          />
        )}
        <TradingViewWidget symbol={`${currentCoin.toUpperCase()}USD`} />
        <PerformanceSection />
        <TrendingCoins trendingCoins={trendingCoins} />
        <AboutSection />
        <TokenomicsSection />
        <TeamSection />
        <YouMayAlsoLike trendingCoins={trendingCoins} />
      </main>
      <Footer />
    </div>
  );
}
