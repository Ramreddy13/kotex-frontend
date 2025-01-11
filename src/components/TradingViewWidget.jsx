import React from "react";

export default function TradingViewWidget({ symbol }) {
  return (
    <div className="my-6">
      <iframe
        src={`https://www.tradingview.com/widgetembed/?symbol=${symbol}&interval=D&theme=Light`}
        className="w-full h-96"
        frameBorder="0"
        title="TradingView Widget"
      ></iframe>
    </div>
  );
}
