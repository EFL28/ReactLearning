// tengo distintas opcions que se pueden arrastrar y soltar en un contenedor
//opciones
export const opcionesDragable = document.querySelectorAll('.dragable'); //cosas que se pueden arrastrar

//contenedor
export const contenedores = document.querySelectorAll('.option-container'); //contenedor donde se pueden soltar las cosas

//agregar eventos a las opciones
opcionesDragable.forEach(opcion => {
    opcion.addEventListener('dragstart', (event) => {
        console.log('drag start');
    });
    opcion.addEventListener('dragend', (event) => {
        console.log('drag end');
    });
});

// contenedores.forEach(contenedor => {
//     contenedor.addEventListener('dragover', (event) => {
//         event.preventDefault();
//         console.log('drag over');
//     });
//     contenedor.addEventListener('dragenter', (event) => {
//         console.log('drag enter');
//     });
//     contenedor.addEventListener('dragleave', (event) => {
//         console.log('drag leave');
//     });
//     contenedor.addEventListener('drop', (event) => {
//         console.log('drop');
//     });
// });


