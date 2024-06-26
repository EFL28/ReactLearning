import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

//imgs
import tesoro from '../assets/img/tesoro.jpg';
import reboot from '../assets/img/reboot.jpg';
import dead from '../assets/img/dead.jpg';


import '../resources/css/adventure.css';


export default function Adventure() {
    const location = useLocation();
    const opcion2 = location.state.opcion2;

    let parrafo;
    let foto;

    switch (opcion2) {
        case "su derecha":
            parrafo = "Apareció en su cama, en su casa sin entender muy bien porqué. Bajo las escaleras de su casa encontró una nota que decía: 'No vuelvas a hacerlo, Trosco. No vuelvas a hacerlo.'";
            foto = reboot;
            break;
        case "su izquierda":
            parrafo = "Apareció en un sala que no habia explorado antes, con un gran cofre en el centro. Al abrirlo, encontró una gran cantidad de oro y joyas. Trosco se convirtió en el hombre más rico de la región.";
            foto = tesoro;
            break;
        case "detrás suyo":
            parrafo = "Apareció atado de pies y manos imposible de moverse, oyendo gritos de dolor y risas de fondo. Trosco no volvió a ser visto por nadie.";
            foto = dead;
            break;
        default:
            break;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header className="mb-4" />
            <div className="flex-grow mx-auto p-4">
                <h2 className="text-3xl font-bold mb-4">El extraño viaje: FINAL</h2>

                <p className="text-lg mb-4">
                    Trosco abrió los ojos tras este extraño suceso.
                    <br />
                    {parrafo}
                    {foto && <img src={foto} alt="Foto de la elección" className="mt-4 mx-auto w-1/3" />}
                </p>
                <div className="button-container">
                    <Link to="/">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Fin</button>
                    </Link>
                </div>
            </div>
            <Footer className="mb-4" />
        </div>
    );
}