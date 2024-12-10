document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header nav');
    const hamburger = document.createElement('button');

    hamburger.textContent = '☰';
    hamburger.setAttribute('arial-label', 'Toggle Menu');
    hamburger.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: white;
    z-index: 1001;
    `;

    nav.before(hamburger);

    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.textContent = isOpen ? '❌' : '☰'; 
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            hamburger.style.display = 'block';
            nav.classList.remove('open');
        } else {
            hamburger.style.display = 'none';
            nav.classList.add('open');
        }
    });

    window.dispatchEvent(new Event('resize'));
});