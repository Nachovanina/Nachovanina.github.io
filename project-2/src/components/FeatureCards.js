import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: "🖥️",
      title: "Pantalla Táctil 13.2\"",
      description: "Sistema SYNC 4 con conectividad avanzada"
    },
    {
      icon: "🅿️",
      title: "Asistente de Estacionamiento",
      description: "Maniobras automáticas para un estacionamiento perfecto"
    },
    {
      icon: "💡",
      title: "Faros LED Adaptativos",
      description: "Iluminación inteligente que se adapta a la carretera"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tecnología Exclusiva del Titanium</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;