import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Elecciones from "./Elecciones";
import Botones from "./Botones";

//hooks
import { useDragAndDrop } from '../hooks/useDragAndDrop';

//imgs
import orco from '../assets/img/orco.jpg';
import hombresLobo from '../assets/img/hombres-lobo.jpg';
import brujo from '../assets/img/brujo.jpg';

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

    const opciones = [
        ["orco", "grupo de hombres-lobo", "brujo"],
        ["su derecha", "su izquierda", "detrás suyo"],
        ["un gran destello", "un gran temblor", "un gran chillido"]
    ];


    const navigate = useNavigate();
    const handleSiguiente = () => {
        navigate("/adventure/3", { state: { opcion2: container2Text } });
    };

    const containersFilled = container1Text !== "" && container2Text !== "" && container3Text !== "";

    const [selectedImage, setSelectedImage] = useState(null);

    const handleConfirmar = () => {
        switch (container1Text) {
            case "orco":
                setSelectedImage(orco);
                break;
            case "grupo de hombres-lobo":
                setSelectedImage(hombresLobo);
                break;
            case "brujo":
                setSelectedImage(brujo);
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
                    Habiendo recibido los consejos que buscaba, Trosco inició su busqueda.
                    Pasó dias caminando hasta llegar a su destino, donde en la entrada se encontró con un <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "container1")} className="option-container border-2 border-black">{container1Text}</div> que le bloqueaba el paso.
                    <br />
                    Menos mal que Trosco llevaba consigo su arma que le ayudó a derrotar al enemigo.
                    Ya dentro de la estancia empezó a buscar el tesoro, aunque sin exito. De repente escucho unos ruidos que venian de <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "container2")} className="option-container border-2 border-black">{container2Text}</div>
                    <br />
                    Trosco decidió ir a investigar. Cuando más se acercaba, mas fuerte eran los ruidos. Hasta que llegó al epicentro de los ruidos donde <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "container3")} className="option-container border-2 border-black">{container3Text}</div> le dejó sin sentido.
                </p>

                <Elecciones onDragStart={handleDragStart} opciones={opciones} />
                {selectedImage && (
                    <div className="image-container mt-4">
                        <img src={selectedImage} />
                    </div>
                )}
                <Botones onLimpiar={handleLimpiar} confirmar={handleConfirmar} next={handleSiguiente} containersFilled={containersFilled}/>
            </div>
            <Footer />
        </div>
    );
}