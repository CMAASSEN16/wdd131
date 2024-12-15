document.addEventListener('DOMContentLoaded', function() {
    const pageHeaders = {
        'the-diver.html': {
            title: 'The Man In The Tank',
            imgSrc: 'images/old-diver.webp',
            imgAlt: 'Old Style dive suit with diver in the water.'
        },
        'certificates.html': {
            title: 'Scuba Certification Courses',
            imgSrc: 'images/old-diver.webp',
            imgAlt: 'Old Style dive suit with diver in the water.'
        },
        'pois.html': {
            title: 'Dive Sites',
            imgSrc: 'images/old-diver.webp',
            imgAlt: 'Old Style dive suit with diver in the water.'
        },
        'siteplan.html': {
            title: 'Site Plan Page',
            imgSrc: null, 
            imgAlt: null
        }
    };

    const currentPage = window.location.pathname.split('/').pop() || 'the-diver.html';
    const pageInfo = pageHeaders[currentPage] || pageHeaders['the-diver.html'];

    let headerHTML = '';
    
    if (pageInfo.imgSrc) {
        headerHTML += `
            <img src="${pageInfo.imgSrc}" alt="${pageInfo.imgAlt}">
        `;
    }

    headerHTML += `
        <h1>${pageInfo.title}</h1>
        <nav>
            <a href="the-diver.html"${currentPage === 'the-diver.html' ? ' class="active"' : ''}>Home</a>
            <a href="certificates.html"${currentPage === 'certificates.html' ? ' class="active"' : ''}>Scuba Classes</a>
            <a href="pois.html"${currentPage === 'pois.html' ? ' class="active"' : ''}>Dive Sites</a>
        </nav>
    `;

    document.querySelector('header').innerHTML = headerHTML;
}); 

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