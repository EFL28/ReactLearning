import React from 'react';

function ResultDisplay({ result }) {
    return (
        <div className="mt-8">
            {result === 0 && <p className='text-xl mt-4'>Empate</p>}
            {result === 1 && <p className='text-xl mt-4'>Has ganado</p>}
            {result === 2 && <p className='text-xl mt-4'>Has perdido</p>}
        </div>
    )
}

export default ResultDisplay;