// Simple JavaScript Example: Toggle Dark/Light Mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Add dark mode styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .dark-mode {
            background-color: #333;
            color: white;
        }
        .dark-mode header, .dark-mode footer {
            background-color: #444;
        }
    </style>
`);

// Slideshow Functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Initial call to start the slideshow
