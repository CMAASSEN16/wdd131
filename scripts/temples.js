document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header nav');
    const hamburger = document.createElement('button');

    hamburger.textContent = '☰';
    hamburger.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: white;
    `;

    nav.before(hamburger);

    hamburger.addEventListener('click', () => {
        const isVisible = nav.style.display === 'flex';
        nav.style.display = isVisible ? 'none' : 'flex';
        hamburger.textContent = isVisible ? '☰' : '❌'
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            hamburger.style.display = 'block';
            nav.style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            nav.style.display = 'flex';
        }
    });

    window.dispatchEvent(new Event('resize'));
});