import React from 'react';

const FordHero = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <img 
        src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0Yj1ZZ9KHLxysUGcrlHAMdQ0Ba6XFOPIJgkW1" 
        alt="Ford Focus Titanium" 
        className="absolute inset-0 object-cover w-full h-full opacity-70"
      />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          NUEVO <span className="text-ford-blue">FORD FOCUS TITANIUM</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          Experimenta la máxima expresión de lujo y tecnología en Argentina
        </p>
        <button className="bg-ford-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
          Reserva tu test drive
        </button>
      </div>
    </div>
  );
};

export default FordHero;