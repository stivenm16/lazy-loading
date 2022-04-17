const isIntersecting = (entry) => {

    return entry.isIntersecting
};

const loadImage = (entry) => {
    const container = entry.target; // Div
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //Load image
    imagen.src = url;

    observer.unobserve(container); // Deja de observar la imagen
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  observer.observe(imagen)
};