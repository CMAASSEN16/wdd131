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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Fukuoka Japan Temple",
        location: "Fukuoka-shi, Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },
    {
        templeName: "Winter Quarters Nebraska Temple",
        location: "Omaha, Nebraska, United States",
        dedicated: "2001, April, 22",
        area: 16000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
    },
    {
        templeName: "Toronto Ontario Temple",
        location: "Brampton, Ontario, Canada",
        dedicated: "1990, August, 26",
        area: 57982,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-235671-wallpaper.jpg"
    },
];

function displayTemples(filteredTemples) {
    const main = document.querySelector("main");
    main.innerHTML = "<h2>Home</h2>";
    
    filteredTemples.foreach((temple) => {
        const article = document.createElement("article");
        article.classList.add("temple-card");
    
        article.innerHTML = `
            <figure>
                <img
                    src="${temple.imageUrl}"
                    alt="${temple.templeName}"
                    loading="lazy">
                <figcaption>${temple.templeName}</figcaption>
            </figure>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
        `;
        main.appendChild(article);
    });
}

function filterOld() {
  return temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );
}

function filterNew() {
  return temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );
}

function filterLarge() {
  return temples.filter((temple) => temple.area > 90000);
}

function filterSmall() {
  return temples.filter((temple) => temple.area < 10000);
}

document.querySelector("nav").addEventListener("click", (event) => {
  event.preventDefault();
  const filter = event.target.textContent.toLowerCase();

  switch (filter) {
    case "old":
      displayTemples(filterOld());
      break;
    case "new":
      displayTemples(filterNew());
      break;
    case "large":
      displayTemples(filterLarge());
      break;
    case "small":
      displayTemples(filterSmall());
      break;
    case "home":
    default:
      displayTemples(temples);
  }
});

displayTemples(temples);