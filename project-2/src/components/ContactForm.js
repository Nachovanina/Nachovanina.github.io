import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario de Contacto Titanium enviado:", formData);
    alert("¡Gracias por tu interés en el Ford Focus Titanium! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 bg-ford-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¡Reserva tu prueba de manejo del Focus Titanium!</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded text-gray-800"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded text-gray-800"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="phone" className="block mb-2">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 rounded text-gray-800"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block mb-2">Mensaje adicional (opcional)</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded text-gray-800"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-white text-ford-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;