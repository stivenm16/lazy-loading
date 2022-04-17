import h from 'hyperscript'
import { registerImage } from "./lazy";

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;


const createImageNode = () => {
    // const container = document.createElement('div')
    // container.className = 'p-4';


    // const imagen = document.createElement('img')
    // imagen.className = 'mx-auto';
    // imagen.width = '320';
    // imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    const imagen = h('img.mx-auto', {
        width: '320',
        "data-src": `https://randomfox.ca/images/${random()}.jpg`
        ,
    });

    const container = h('div.p-4.mt-3', imagen)

    return container;
};

const mountNode = document.getElementById('images');

const addButton = document.querySelector('button')
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};
addButton.addEventListener('click', addImage);
