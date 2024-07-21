function showImage(index) {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImg = document.getElementById('main-img');

    // Update the source of the main image
    mainImg.src = thumbnails[index].src;

    // Remove the border from all thumbnails
    thumbnails.forEach(img => img.style.border = '2px solid transparent');

    // Add the border to the clicked thumbnail
    thumbnails[index].style.border = '2px solid #007BFF';
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const mainImg = document.getElementById('main-img');

    // Set the lightbox image source to the main image source
    lightboxImg.src = mainImg.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Initialize the gallery by highlighting the first thumbnail
window.onload = function() {
    showImage(0);
    document.getElementById('main-img').onclick = openLightbox;
};
