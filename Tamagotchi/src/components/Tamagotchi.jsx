import statusHandler from '../hooks/status.jsx';
import StatusBar from './StatusBar.jsx';
import ActionButtons from './ActionButtons.jsx';
import StatusImage from './StatusImage.jsx';

function Tamagotchi() { 
    
    const { hunger, happiness, health, feed, play, sleep, getProgressColor, sprite } = statusHandler();
    
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h1 className="text-xl font-bold mb-4">Tamagotchi</h1>
            <StatusImage sprite={sprite}/>
            <StatusBar hunger={hunger} happiness={happiness} health={health} getProgressColor={getProgressColor} />
            <ActionButtons feed={feed} play={play} sleep={sleep}/>
        </div>
    );
}

export default Tamagotchi;