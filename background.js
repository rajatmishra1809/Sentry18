// Subtle parallax for depth (optional)
document.addEventListener("mousemove", e => {
    document.body.style.backgroundPosition =
        `${e.clientX * 0.015}px ${e.clientY * 0.015}px`;
});
