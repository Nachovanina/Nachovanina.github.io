import React from 'react';

const FooterSection = () => {
  return (
    <div className="relative py-16 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 flex">
        <img 
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0z8DI7peYLtCPgmTbn59N6BRyWUl87afK30Dw" 
          alt="Ford Focus Titanium Interior" 
          className="w-1/2 object-cover opacity-50"
        />
        <img 
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0YDUQJcHLxysUGcrlHAMdQ0Ba6XFOPIJgkW1b" 
          alt="Ford Focus Titanium Front" 
          className="w-1/2 object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">El Futuro de la Conducción</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Descubre la innovación, el confort y la potencia que solo el Ford Focus Titanium puede ofrecerte.
          Visita tu concesionario más cercano o contáctanos para más información.
        </p>
        {/* El botón "Cotiza el tuyo" ahora es flotante y permanente */}
      </div>
    </div>
  );
};

export default FooterSection;