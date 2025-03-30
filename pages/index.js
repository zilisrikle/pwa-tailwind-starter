import { useState } from 'react';

const quotes = [
  "You are stronger than you think.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Believe in yourself and all that you are.",
  "Success is what happens after you survive your mistakes.",
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);
  const getNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">💡 Inspire Daily</h1>
      <p className="text-lg text-center max-w-md mb-4">{quote}</p>
      <button
        onClick={getNewQuote}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        New Quote
      </button>
    </div>
  );
}
