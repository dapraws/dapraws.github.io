const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburgermenu');
const iconBars = document.querySelector('.barsic');
const iconClose = document.querySelector('.closeic');

hamburgerMenu.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);

function displayMenu() {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBars.style.display='inline';
        iconClose.style.display='none';
    } else {
        menu.classList.add('tampil')
        iconBars.style.display='none';
        iconClose.style.display='inline';
    }
}

// Get all images inside the 'item' class
const images = document.querySelectorAll('.item img');

// Get the popup and its content
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

// Loop through each image and add a click event listener
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        // Display the popup
        popup.style.display = 'flex';
        
        // Set the clicked image source to the popup image
        popupImg.src = img.src;
        popupImg.alt = img.alt;
    });
});

// Close popup when close button is clicked
document.getElementById('close').addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup when clicking outside the image
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
