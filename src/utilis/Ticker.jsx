import React from 'react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  { label: "EUR/USD", val: "▲ 1.0842 +0.12%", up: true },
  { label: "BTC/USD", val: "▲ $68,240 +2.3%", up: true },
  { label: "GBP/USD", val: "▼ 1.2711 -0.08%", up: false },
  { label: "ETH/USD", val: "▲ $3,580 +1.7%", up: true },
  { label: "XAU/USD", val: "▲ $2,318 +0.5%", up: true },
  { label: "S&P 500", val: "▲ 5,214 +0.3%", up: true },
  { label: "USD/JPY", val: "▼ 153.4 -0.2%", up: false },
  { label: "NASDAQ", val: "▲ 16,340 +0.8%", up: true },
];

const Ticker = () => {
  // Duplicate the array to ensure a seamless loop
  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-teal-500/5 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
      <motion.div
        className="flex space-x-12 whitespace-nowrap w-max"
        animate={{
          x: [0, -1000], // Adjust this value based on your content width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25, // Speed of the ticker
            ease: "linear",
          },
        }}
      >
        {tickerContent.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-2 border-r border-white/5 last:border-none"
          >
            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400">
              {item.label}
            </span>
            <span
              className={`font-mono text-[10px] md:text-xs font-semibold ${
                item.up ? 'text-[#008080]' : 'text-red-400'
              }`}
            >
              {item.val}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;