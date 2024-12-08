document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuLinks = document.getElementById('menu-links');
    const img = document.querySelector('.centered-image img');
    const mainSection = document.getElementById('main-section');
    
    // Check for the menu elements
    if (menuIcon && menuLinks) {
        menuIcon.addEventListener('click', function() {
            menuLinks.classList.toggle('active');
        });
    } else {
        console.error('Menu icon or links not found');
    }
    
    // Check for the image and main section elements
    if (img && mainSection) {
        let xPos = img.offsetLeft;
        let yPos = img.offsetTop;
        let xSpeed = 2;
        let ySpeed = 2;
        let isAnimating = false;

        function animate() {
            if (!isAnimating) return;

            const imgWidth = img.offsetWidth;
            const imgHeight = img.offsetHeight;
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;

            xPos += xSpeed;
            yPos += ySpeed;

            // Check for collision with the container's borders
            if (xPos + imgWidth > containerWidth || xPos < 0) {
                xSpeed = -xSpeed; // Reverse direction on x-axis
            }
            if (yPos + imgHeight > containerHeight || yPos < 0) {
                ySpeed = -ySpeed; // Reverse direction on y-axis
            }

            img.style.left = xPos + 'px';
            img.style.top = yPos + 'px';

            requestAnimationFrame(animate);
        }

        img.addEventListener('click', function() {
            isAnimating = !isAnimating;
            if (isAnimating) {
                img.classList.add('spin-animation');
                mainSection.classList.add('rainbow-gradient'); // Add the gradient animation
                animate();
            } else {
                img.classList.remove('spin-animation');
                mainSection.classList.remove('rainbow-gradient'); // Remove the gradient animation
            }
        });

        // Set initial position
        img.style.left = `${xPos}px`;
        img.style.top = `${yPos}px`;
    } else {
        console.error('Centered image or main section not found');
    }
});
