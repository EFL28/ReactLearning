import React from "react";

function StatusBar({ hunger, happiness, health, getProgressColor }) {
    return (
        <div className="space-y-3">
            <div className="flex items-center">
                <label className="mr-2 font-medium">Hunger: {hunger}</label>
                <div className="flex-1 bg-gray-300 h-4 rounded overflow-hidden">
                    <div className={`${getProgressColor(hunger)} h-full`} style={{ width: `${hunger}%` }} />
                </div>
            </div>

            <div className="flex items-center">
                <label className="mr-2 font-medium">Happiness: {happiness}</label>
                <div className="flex-1 bg-gray-300 h-4 rounded overflow-hidden">
                    <div className={`${getProgressColor(happiness)} h-full`} style={{ width: `${happiness}%` }} />
                </div>
            </div>

            <div className="flex items-center">
                <label className="mr-2 font-medium">Health: {health}</label>
                <div className="flex-1 bg-gray-300 h-4 rounded overflow-hidden">
                    <div className={`${getProgressColor(health)} h-full`} style={{ width: `${health}%` }} />
                </div>
            </div>
        </div>
    );

}

export default StatusBar;