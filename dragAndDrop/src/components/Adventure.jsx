import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Elecciones from "./Elecciones";
import Botones from "./Botones";

//hooks
import { useDragAndDrop } from '../hooks/useDragAndDrop';

//imgs
import arco from '../assets/img/arco.jpg';
import baston from '../assets/img/bastón.jpg';
import espada from '../assets/img/espada.jpg';

//style
import '../resources/css/adventure.css';


export default function Adventure() {
    const {
        container1Text,
        container2Text,
        container3Text,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleLimpiar
    } = useDragAndDrop();

    const navigate = useNavigate();
    const handleSiguiente = () => {
        navigate("/adventure/2", { state: { opcion2: container2Text } });
    };

    const opciones = [
        ["una cueva.", "un castillo.", "un bosque."],
        ["su espada,", "su arco y sus flechas,", "su bastón mágico,"],
        ["sus padres.", "al sabio del valle.", "su mejor amigo."]
    ];

    const containersFilled = container1Text !== "" && container2Text !== "" && container3Text !== "";

    const [selectedImage, setSelectedImage] = useState(null);

    const handleConfirmar = () => {
        switch (container2Text) {
            case "su espada,":
                setSelectedImage(espada);
                break;
            case "su arco y sus flechas,":
                setSelectedImage(arco);
                break;
            case "su bastón mágico,":
                setSelectedImage(baston);
                break;
            default:
                setSelectedImage(null);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header className="mb-4" />
            <div className="flex-grow mx-auto p-4">
                <h2 className="text-3xl font-bold mb-4">El extraño viaje</h2>

                <p className="text-lg mb-4">
                    Había una vez un valiente aventurero llamado Trosco, que se encontro un viejo pergamino en un mercado local.
                    En este pergamino se mencionaba un tesoro legendario escondido en <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "container1")} className="option-container border-2 border-black">{container1Text}</div>
                    <br />
                    Decidido a encontrar el tesoro, Trosco se preparó.
                    Para esta aventura nuestro héroe decidió llevar consigo <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "container2")} className="option-container border-2 border-black">{container2Text}</div> consciente de que su elección determinaría su destino.
                    <br />
                    Una vez que Trosco ya estaba listo, solo le faltaba un último detalle, visitar, antes de partir, a <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "container3")} className="option-container border-2 border-black">{container3Text}</div>

                </p>
                <Elecciones onDragStart={handleDragStart} opciones={opciones} />

                {selectedImage && (
                    <div className="image-container mt-4">
                        <img src={selectedImage} />
                    </div>
                )}

<Botones onLimpiar={handleLimpiar} confirmar={handleConfirmar} next={handleSiguiente} containersFilled={containersFilled} />
            </div>
            <Footer className="mb-4" />
        </div>

    );
}