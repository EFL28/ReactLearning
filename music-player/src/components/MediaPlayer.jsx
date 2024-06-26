import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'


import Header from "../components/Header";
import Footer from "../components/Footer";


const MediaPlayer = ({ type, src }) => {
    const mediaRef = useRef(null);
    const [volume, setVolume] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);



    // Controles reproductor
    const play = () => {
        mediaRef.current.play();
        setIsPlaying(true);
    }

    const pause = () => {
        mediaRef.current.pause();
        setIsPlaying(false);
    }

    const restartSong = () => {
        mediaRef.current.pause();
        mediaRef.current.currentTime = 0;
        setIsPlaying(false);
    }

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        mediaRef.current.volume = newVolume;
    }

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }

    useEffect(() => {
        const audio = mediaRef.current;

        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }

        const setAudioTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener("loadeddata", setAudioData);
        audio.addEventListener("timeupdate", setAudioTime);
        audio.addEventListener("seeked", setAudioTime);

        return () => {
            audio.removeEventListener("loadeddata", setAudioData);
            audio.removeEventListener("timeupdate", setAudioTime);
            audio.removeEventListener("seeked", setAudioTime);
        };

    },);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const ProgressBar = ({ value, max }) => {
        const fillPercentage = (value / max) * 100;

        const handleClick = (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left; // posición x del clic
            const clickedValue = x * max / rect.width;
            mediaRef.current.currentTime = clickedValue;
        };

        return (
            <div onClick={handleClick} className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
                <div style={{ width: `${fillPercentage}%` }} className="h-full bg-blue-700"></div>
            </div>
        );
    };

    const stop = () => {
        mediaRef.current.pause();
        mediaRef.current.currentTime = 0;
        setIsPlaying(false);
    }

    return (
        <div className="">
            <Header />
            {type === 'video' ? (
                <div className="bg-slate-500 p-4">
                    <video ref={mediaRef} className="w-full max-w-xl mx-auto pt-4" controls={false}>
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="pt-3">Vídeo de <a className="underline" href="https://pixabay.com/es/users/joshuaworoniecki-12734309/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=201766">Joshua Woroniecki</a> de <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=201766">Pixabay</a></p>
                </div>) : (
                <div className="bg-slate-500">
                    <audio ref={mediaRef} controls={false}>
                        <source src={src} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>

                    {/* Caratula canción */}
                    <div className="flex justify-center items-center mb-4">
                        <img className="mt-4 rounded" src="https://freemusicarchive.org/image/?file=images%2Falbums%2FLinenoise_-_Magenta_Moon_-_20140520111655036.jpg&width=290&height=290&type=album" alt="" />
                    </div>

                    {/* Licencia de la canción */}
                    <p>Canción <a className="underline pt-4" href="https://freemusicarchive.org/music/Linenoise/Magenta_Moon/01_line_noise_-_magenta_moon_part_ii/">Magenta Moon (Part II)</a> de <a className="underline" href="https://freemusicarchive.org/music/Line_Noise/">Line Noise</a> de <a href="https://freemusicarchive.org/">Free Music Archive</a></p>
                    <p className="font-bold italic pt-2 pb-4">Licencia (CC BY-NC-SA)</p>
                </div>
            )}

            {/* Barra de progreso */}
            <div className="flex justify-between items-center space-x-2 p-4 bg-slate-500">
                <div className="font-semibold">{formatTime(currentTime)}</div>

                <div className="flex-grow justify-center">
                    <ProgressBar value={currentTime} max={duration} />
                </div>

                <div className="font-semibold">{formatTime(duration)}</div>
            </div>

            {/* Botones para controlar la reproducción */}
            <div className="flex space-x-2 justify-evenly bg-slate-500">
                <button onClick={restartSong} className="px-4 py-2 bg-blue-700 text-white rounded"><FontAwesomeIcon icon={faBackwardStep} /></button>
                <button onClick={togglePlay} className="px-4 py-2 bg-blue-700 text-white rounded"> <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /></button>
                <button onClick={stop} className="px-4 py-2 bg-blue-700 text-white rounded"><FontAwesomeIcon icon={faForwardStep} /></button>
            </div>

            {/* Control deslizante para el volumen */}
            <div className="flex justify-center items-center space-x-2 bg-slate-500">
                <label htmlFor="volume" className="text-black">Volumen:</label>
                <input id="volume" type="range" min="0" max="1" step="0.1" value={volume} onChange={changeVolume} className="w-full max-w-xs accent-blue-700 p-4" />
            </div>
            <Footer />
        </div>
    );

}

export default MediaPlayer;