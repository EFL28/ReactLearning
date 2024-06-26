import React, { useState, useEffect } from 'react'

//imports
import options from '../data/options';
import useChoices from '../hooks/useChoices';
import OptionButton from './OptionButton';
import ResultDisplay from './ResultDisplay';
import MessageDisplay from './MessageDisplay';
import GameController from './GameController';
import Navbar from './Navbar';


function Game() {
  const {
    userChoice,
    computerChoice,
    result,
    disabled,
    userMessage,
    computerMessage,
    handlePlay,
    reset,
  } = useChoices();
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
        <Navbar />  
        <div className="max-w-md mx-auto">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              handlePlay={() => handlePlay(option.id)}
              disabled={disabled}
            />
          ))}

          {userChoice !== null && (
            <MessageDisplay message={userMessage} />
          )}

          {computerChoice !== null && (
            <MessageDisplay message={computerMessage} />
          )}

          {result !== null && (
            <ResultDisplay result={result} />
          )}

          {result !== null && (
            <GameController reset={reset} />
          )}
        </div>
      </div>

    </div>
  )

}

export default Game
