import { useState, useEffect, useRef } from 'react';

// default pikachus at start of the tamagotchi
import defaultGif from '../assets/pikachus/default/pikachu-default.gif';
import wavingGif from '../assets/pikachus/default/pikachu-waving.gif';
import wavingGif2 from '../assets/pikachus/default/pikachu-waving-2.gif';

// eating pikachus when feed button is clicked
import eatingGif from '../assets/pikachus/eating/pikachu-eating.gif';
import eatingGif2 from '../assets/pikachus/eating/pikachu-eating-2.gif';

// mood pikachus whe feed button is clicked (change beacuse of values of hunger, happiness, health)
import angryGif from '../assets/pikachus/mood/pikachu-angry.gif';
import happyGif from '../assets/pikachus/mood/pikachu-happy.gif';
import happyGif2 from '../assets/pikachus/mood/pikachu-happy-2.gif';
import happyGif3 from '../assets/pikachus/mood/pikachu-happy-3.gif';
import happyGif4 from '../assets/pikachus/mood/pikachu-happy-4.gif';
import noGif from '../assets/pikachus/mood/pikachu-no.gif';
import yesGif from '../assets/pikachus/mood/pikachu-yes.gif';
import thinkingGif from '../assets/pikachus/mood/pikachu-thinking.gif';
import surpriseGif from '../assets/pikachus/mood/pikachu-surprised.gif';

// playing pikachus when play button is clicked
import punchingGif from '../assets/pikachus/playing/pikachu-punching.gif';
import playingGif from '../assets/pikachus/playing/pikachu-playing.gif';
import playingGif2 from '../assets/pikachus/playing/pikachu-playing-2.gif';
import dancingGif from '../assets/pikachus/playing/pikachu-dancing.gif';
import dancingGif2 from '../assets/pikachus/playing/pikachu-dancing-2.gif';

// sleeping pikachu when sleep button is clicked
import sleepingGif from '../assets/pikachus/sleeping/pikachu-sleeping.gif';


function StatusHandler() {
    const pikachuGifs = [
        defaultGif,
        wavingGif,
        wavingGif2,
        thinkingGif
    ];

    const [hunger, setHunger] = useState(100);
    const [happiness, setHappiness] = useState(100);
    const [health, setHealth] = useState(100);
    const timer = useRef();
    const [sprite, setSprite] = useState(pikachuGifs[Math.floor(Math.random() * pikachuGifs.length)]);

    const getRandomSprite = () => {
        return pikachuGifs[Math.floor(Math.random() * pikachuGifs.length)];
    }

    useEffect(() => {
        timer.current = setInterval(() => {
            setHappiness(happiness => happiness - 1);
            setHealth(health => health - 1);
            setHunger(hunger => hunger - 1);
        }, 3000);
        return () => clearInterval(timer.current);
    }, []);

    useEffect(() => {
        if (happiness < 40 || health < 40 || hunger < 40) {
            setSprite(angryGif);
        }
    }, [happiness, health, hunger]);

    const feed = () => {
        setHunger(prevHunger => Math.min(prevHunger + 20, 100));
        setHealth(prevHealth => Math.min(prevHealth + 5, 100));
        setHappiness(prevHappiness => Math.min(prevHappiness + 5, 100));
        setSprite(eatingGif2);

       
    };

    const play = () => {
        setHappiness(prevHappiness => Math.min(prevHappiness + 20, 100));
        setHunger(prevHunger => Math.max(prevHunger - 5, 0));
        setHealth(prevHealth => Math.max(prevHealth - 5, 0));
        setSprite(playingGif2);

       
    };

    const sleep = () => {
        setHealth(prevHealth => Math.min(prevHealth + 10, 100));
        setHunger(prevHunger => Math.max(prevHunger - 5, 0));
        setHappiness(prevHappiness => Math.max(prevHappiness - 5, 0));
        setSprite(sleepingGif);

        
    };

    const getProgressColor = (value) => {
        if (value > 60) return 'bg-green-500';
        if (value > 30) return 'bg-yellow-500';

        return 'bg-red-500';
    }

    
    return { hunger, happiness, health, feed, play, sleep, getProgressColor, sprite };

}

export default StatusHandler;