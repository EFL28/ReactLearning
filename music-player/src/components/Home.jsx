import React from "react";
import { Link } from "react-router-dom";


import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-slate-500">
            <Header />
            <h1 className="font-semibold text-3xl mt-4">Reproductor Multimedia</h1>
            <p className="mb-4">Reproduce tus canciones y videos favoritos</p>
            <div className="mb-4 flex justify-center align-middle">
                <Link to={"/music"}><button className="bg-blue-700 rounded px-2 p-2 text-white mr-4">Canciones</button></Link>
                <Link to={"/video"}><button className="bg-blue-700 rounded px-2 p-2 text-white">Videos</button></Link>
            </div>

            <Footer />
        </div>
    );
    }

export default Home;