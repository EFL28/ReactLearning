import React from "react";

function ActionButtons({ feed, play, sleep }) {
    return (
        <div className="flex space-x-2 mt-4 justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={feed}>Feed</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={play}>Play</button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition" onClick={sleep}>Sleep</button>
        </div>
    );
}

export default ActionButtons;