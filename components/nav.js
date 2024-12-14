document.addEventListener('DOMContentLoaded', function() {
    const nav = `
        <nav>
            <a href="the-diver.html">Home</a>
            <a href="certificates.html">Scuba Classes</a>
            <a href="pois.html">Dive Sites</a>
        </nav>
    `;
    
    document.querySelector('header').insertAdjacentHTML('beforeend', nav);
}); 