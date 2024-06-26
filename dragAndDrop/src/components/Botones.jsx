import React from "react";
import { Link } from "react-router-dom";

export default function Botones( {onLimpiar, confirmar, next, containersFilled } ) {

    return (
        <div className="flex justify-between mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200" onClick={onLimpiar}>Limpiar</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200" onClick={confirmar}>Confirmar</button>
            <button disabled={!containersFilled} className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 ${!containersFilled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={next}>Siguiente</button>
        </div>
    );
}