document.addEventListener('DOMContentLoaded', () => {
    // Get the canvas element and set up the context
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Store the previous mouse position
    let lastX = 0;
    let lastY = 0;

    // Function to draw line
    function drawLine(x, y) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'black'; // Line color
        ctx.lineWidth = 2; // Line width
        ctx.stroke();
        ctx.closePath();

        lastX = x;
        lastY = y;
    }

    // Event listener for mouse movement
    canvas.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // Draw line only if mouse is moved
        if (lastX !== 0 || lastY !== 0) {
            drawLine(x, y);
        }

        lastX = x;
        lastY = y;
    });

    // Reset positions on mouse down
    canvas.addEventListener('mousedown', (event) => {
        lastX = event.clientX;
        lastY = event.clientY;
    });

    // Reset positions on mouse up
    canvas.addEventListener('mouseup', () => {
        lastX = 0;
        lastY = 0;
    });

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
document.addEventListener('mousemove', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'block'; // Show the popup
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1';
});

const symbols = ['𓂸', '𓂸', '𓂸', '𓂸', '𓂸', '𓂸', '𓅓', '§', '𓂀', '𓂀'];

function createSymbol() {
    const symbolElement = document.createElement('div');
    symbolElement.className = 'symbol';
    symbolElement.innerText = symbols[Math.floor(Math.random() * symbols.length)];

    // Set random starting position
    symbolElement.style.left = Math.random() * 100 + 'vw';
    symbolElement.style.top = Math.random() * 100 + 'vh';

    document.body.appendChild(symbolElement);

    // Random movement
    let deltaX = (Math.random() - 0.5) * 2; // Random horizontal speed
    let deltaY = (Math.random() - 0.5) * 2; // Random vertical speed

    function moveSymbol() {
        const rect = symbolElement.getBoundingClientRect();

        // Update position
        symbolElement.style.left = (rect.left + deltaX) + 'px';
        symbolElement.style.top = (rect.top + deltaY) + 'px';

        // Bounce off edges
        if (rect.left + deltaX < 0 || rect.right + deltaX > window.innerWidth) {
            deltaX = -deltaX; // Reverse direction
        }
        if (rect.top + deltaY < 0 || rect.bottom + deltaY > window.innerHeight) {
            deltaY = -deltaY; // Reverse direction
        }

        requestAnimationFrame(moveSymbol); // Continue moving
    }

    moveSymbol();
}

// Create multiple symbols
for (let i = 0; i < 40; i++) {
    createSymbol();
}


