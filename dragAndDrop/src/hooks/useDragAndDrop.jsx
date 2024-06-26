import { useState } from "react";

export function useDragAndDrop() {
    const [container1Text, setContainer1Text] = useState("");
    const [container2Text, setContainer2Text] = useState("");
    const [container3Text, setContainer3Text] = useState("");
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (e, item) => {
        setDraggedItem(item);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, containerId) => {
        e.preventDefault();
        switch (containerId) {
            case "container1":
                setContainer1Text(draggedItem);
                break;
            case "container2":
                setContainer2Text(draggedItem);
                break;
            case "container3":
                setContainer3Text(draggedItem);
                break;
            default:
                break;
        }
    };

    const handleLimpiar = () => {
        setContainer1Text("");
        setContainer2Text("");
        setContainer3Text("");
    };


    return {
        container1Text,
        container2Text,
        container3Text,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleLimpiar
    };
}