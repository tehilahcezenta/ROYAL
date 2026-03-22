
document.getElementById("colorButton").addEventListener("click", function() {
    
    const colors = ["#f4f4f4", "#ff6347", "#90ee90", "#87ceeb", "#dda0dd"];
    
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    
    document.body.style.backgroundColor = randomColor;
});