document.addEventListener('DOMContentLoaded', function() {
    const bibliotecaHeader = document.getElementById('bibliotecaHeader');
    const bibliotecaContent = document.getElementById('bibliotecaContent');
    
    // Add scroll event listener to bibliotecaContent
    bibliotecaContent.addEventListener('scroll', function() {
        // If scrolled down, add shadow class, otherwise remove it
        if (bibliotecaContent.scrollTop > 10) {
            bibliotecaHeader.classList.add('shadow');
        } else {
            bibliotecaHeader.classList.remove('shadow');
        }
    });
});
