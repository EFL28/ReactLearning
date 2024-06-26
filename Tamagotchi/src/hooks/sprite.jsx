// import React, { useState } from 'react';
// import Sprite from '../assets/Tamagotchi_sprite.png';

// function sprite() {
//     const [spriteState, setSpriteState] = useState('firstanimation');

//     const animateSprite = {
//         "firstanimation": "animationOne 2s steps(4) infinite",
//         "secondanimation": "animationTwo 2s steps(4) infinite",
//     }

//     const displaySprite = {
//         backgrounImage: `url(${Sprite})`,
//         animation: `${animateSprite[spriteState]}`
//     }

//     return (
//         <div>
//             <button onClick={setSpriteState(!spriteState)}>Change Animation</button>

//             <div style={displaySprite} className='sprite'></div>
//         </div>

//     );

// }

// export default sprite;