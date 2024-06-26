import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

//styles
import '../resources/css/adventure.css';


export default function Inicio() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header className="mb-4" />
            <div className="flex-grow container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">¡Bienvenido a nuestra emocionante aventura interactiva!</h1>
                <p className="text-lg mb-4">
                    Sumérgete en un mundo lleno de misterio, peligro y descubrimientos emocionantes.
                    En nuestra plataforma, tú eres el héroe de tu propia historia, tomando decisiones que moldearán el curso de tus aventuras.
                    ¿Estás listo para explorar mundos fantásticos, enfrentarte a desafíos épicos y desentrañar enigmas intrigantes?

                    Únete a nosotros y comienza tu viaje hacia lo desconocido. ¡La aventura te espera!
                </p>

                <div className="button-container">
                    <Link to="/adventure" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                        <button>¡Que comience la aventura!</button>
                    </Link>
                </div>
            </div>
            <Footer className="mb-4" />
        </div>
    );
}
