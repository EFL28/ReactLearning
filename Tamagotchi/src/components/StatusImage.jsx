import React from 'react';

function StatusImage({ sprite }) {
    return (
        <div className='bg-blue-200 h-auto mb-4 overflow-hidden flex justify-center items-center rounded-lg'>
            <img src={sprite} alt="Tamagotchi status" className="w-72 h-72 object-cover" />
        </div>
    );
}

export default StatusImage;