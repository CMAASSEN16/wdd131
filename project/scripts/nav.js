document.addEventListener('DOMContentLoaded', function() {
    // Page title mapping
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

    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'the-diver.html';
    const pageInfo = pageHeaders[currentPage] || pageHeaders['the-diver.html'];

    // Create header HTML
    let headerHTML = '';
    
    // Add image if it exists for this page
    if (pageInfo.imgSrc) {
        headerHTML += `
            <img src="${pageInfo.imgSrc}" alt="${pageInfo.imgAlt}">
        `;
    }

    // Add title and navigation
    headerHTML += `
        <h1>${pageInfo.title}</h1>
        <nav>
            <a href="the-diver.html"${currentPage === 'the-diver.html' ? ' class="active"' : ''}>Home</a>
            <a href="certificates.html"${currentPage === 'certificates.html' ? ' class="active"' : ''}>Scuba Classes</a>
            <a href="pois.html"${currentPage === 'pois.html' ? ' class="active"' : ''}>Dive Sites</a>
        </nav>
    `;

    // Replace the entire header content
    document.querySelector('header').innerHTML = headerHTML;
}); 