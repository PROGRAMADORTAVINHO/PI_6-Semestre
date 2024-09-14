/* galeria */
let currentImageIndex = 0;
const images = [
    'Images_About/foto1.jpg',
    'Images_About/foto2.jpg',
    'Images_About/foto3.jpg',
    'Images_About/foto4.jpg',
    'Images_About/foto5.jpg',

    'Images_About/foto1.jpg',
    'Images_About/foto2.jpg',
    'Images_About/foto3.jpg',
    'Images_About/foto4.jpg',
    'Images_About/foto5.jpg',

    'Images_About/foto1.jpg',
    'Images_About/foto2.jpg',
    'Images_About/foto3.jpg',
    'Images_About/foto4.jpg',
    'Images_About/foto5.jpg',

    'Images_About/foto1.jpg',
    'Images_About/foto2.jpg',
    'Images_About/foto3.jpg',
    'Images_About/foto4.jpg',
    'Images_About/foto5.jpg'
    // Adicione mais imagens aqui conforme necessário
];

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery img');

// Abrir a lightbox com a imagem clicada
function openImage(index) {
    currentImageIndex = index;
    lightboxImg.src = images[currentImageIndex];
    lightbox.style.display = 'flex';
}

// Fechar a lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Mudar para a próxima ou anterior imagem
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex];
}

// Adicionar e remover classes de opacidade e hover
function addDimmedClass(event) {
    galleryImages.forEach(img => {
        if (img !== event.target) {
            img.classList.add('dimmed');
        }
    });
    event.target.classList.add('hover');
}

function removeDimmedClass() {
    galleryImages.forEach(img => {
        img.classList.remove('dimmed', 'hover');
    });
}

// Adiciona os eventos de mouseover e mouseout às imagens
galleryImages.forEach(img => {
    img.addEventListener('mouseover', addDimmedClass);
    img.addEventListener('mouseout', removeDimmedClass);
});