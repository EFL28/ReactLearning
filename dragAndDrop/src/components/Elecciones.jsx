import React from "react";
//import { opcionesDragable, contenedor } from '../resources/js/script.js';

import '../resources/css/elecciones.css';

export default function Elecciones({onDragStart, opciones}) { 
    return (
        <div className="flex flex-wrap justify-between">
            {opciones.map((opcion, index) => (
                <div key={index} className="mb-4">
                    <div>
                        <h5 className="font-bold text-lg mb-2">{`Opción ${index + 1}`}</h5>
                    </div>
                    <div>
                        <ul className="list-disc list-inside">
                            {opcion.map((item, i) => (
                                <li className="mb-1 cursor-move" key={i} draggable onDragStart={(e) => onDragStart(e, item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}