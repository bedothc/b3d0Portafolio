import React, { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      console.log({ name, email, message });
      setIsSubmitting(false);
      // Limpiar campos después de enviar
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="container  px-6 py-12 w-full ">


      <h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>
      <form onSubmit={handleSubmit} className=" rounded-lg shadow-lg p-8 border border-white/[0.1] group/bento" style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-white/[0.2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-white/[0.2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full border border-white/[0.2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className='flex justify-center'>
            <button type="submit"
            disabled={isSubmitting}
            className={`relative bg-black-100 border border-white/[0.2] h-12 w-full  overflow-hidden rounded-2xl p-[1px] focus:outline-none md:w-60 md:mt-10 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <span>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </span>
            </button>
        </div>
      </form>

    </div>
  );
};

export default ContactForm;
