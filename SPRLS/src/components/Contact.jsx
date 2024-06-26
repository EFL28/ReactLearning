import { useState } from 'react';
import React from 'react';
import Navbar from './Navbar';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    // Función para manejar los cambios en los campos de entrada
    const handleChange = (event) => {
        const { name, value } = event.target; // Obtenemos nombre y valor del campo
        setFormData({ ...formData, [name]: value }); // Actualizamos el estado del formulario
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del formulario:', formData);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-gray-300">
            <h1 className="text-4xl font-bold mb-4">Contacto</h1>
            <Navbar />
            <p className="mb-4">¡Estamos aquí para ayudarte! Ponte en contacto con nosotros.</p>
            <form id="contact-form" onSubmit={handleSubmit} method="POST" className="w-full max-w-lg">
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Escribe tu nombre"
                        onChange={handleChange}
                        className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Escribe tu email"
                        onChange={handleChange}
                        className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Mensaje</label>
                    <textarea
                        rows="5"
                        placeholder="Escribe tu mensaje"
                        name="mensaje"
                        className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none"
                    />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:text-black">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;