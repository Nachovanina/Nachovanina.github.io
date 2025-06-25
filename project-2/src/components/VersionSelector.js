import React, { useState } from 'react';

const VersionSelector = () => {
  const titaniumFeatures = [
    "Motor 2.0L EcoBoost de 280 CV",
    "Transmisión automática de 8 velocidades",
    "Pantalla táctil de 13.2\" con SYNC 4",
    "Asistente de estacionamiento activo",
    "Faros LED adaptativos",
    "Sistema de sonido B&O de 675 watts",
    "Asientos de cuero con ajuste eléctrico",
    "Techo solar panorámico"
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Características Exclusivas del Focus Titanium</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Focus Titanium</h3>
          <p className="text-2xl font-bold text-ford-blue mb-6">$7.499.000</p>
          <ul className="space-y-2">
            {titaniumFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-ford-blue mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VersionSelector;