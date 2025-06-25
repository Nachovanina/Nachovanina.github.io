import React from 'react';

const FloatingQuoteButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-ford-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105">
        Cotiza el tuyo
      </button>
    </div>
  );
};

export default FloatingQuoteButton;