document.addEventListener("DOMContentLoaded", function () {
  const contentData = [
    {
      title: "The Tanks At Scheels",
      text: "If you have ever been to the new Scheels store down in Chandler you know it is a place full of wonder. It is impressive that they have a functional ferris wheel inside the store. This along with the many other amazing displays. The one that stands out to me is the three pillar 16,000 gallon tank. If you are lucky to visit on a cleaning day you might question who the man is that is under the suit?",
      imgSrc: "images/tank-small.webp",
      imgAlt:
        "Tank at Chandler Arizona Scheels. Image borrowed from ICM website",
    },
    {
      title: "The Man Behind the Mask",
      text: "Meet Dallas, the skilled diver who maintains these magnificent tanks. With years of experience and a passion for marine life, Dallas ensures these aquatic environments remain pristine for visitors to enjoy.",
      content: `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.6172116409975!2d-111.9004229!3d33.302676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b017aac18fa25%3A0x12879b5a5bf45081!2sSCHEELS!5e0!3m2!1sen!2sus!4v1734062740413!5m2!1sen!2sus"
                width="100%"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>`,
      isIframe: true,
    },
    {
      title: "Community Impact",
      text: `This is the man beneath the mask, Dallas. I like to introduce him as my
        friend but honestly he is so much more than that. Dallas has been my
        friend, my confidant, and honestly a pillar of his community. He is a
        skilled developer that likes to spend time with his family and friends.
        <br />
        <br />One of the greatest things to admire about this diver is that he
        is selfless. He continues to help those that are in his life. Some of
        the things he has done is working within his local church to develop
        programs to assist with tracking certain tasks. The program's end goal
        is to help his church community see the members that could potentially
        need assistance or a just a friendly face. He has been and continues to
        be a great mentor for those around him, always pushing people to strive
        for the best that they can be and helping them along the way.
        <br /><br />
        Dallas likes to explore the unkown, thus why he sought to get his dive
        certification. He likes to seeek the fun that is to be held in life.
        This passion for exploration is what led to him being "The Man In The
        Tank." Bein the man that Dallas is, he encourages all to explore and
        find your own passions, life is short and he wants all those that come
        into his life to live it to the fullest. That is why he reccomends if
        you're interested in obtaining your own scuba certifications to visit
        the <a href="certificates.html">Scuba Classes</a> site.`,
      imgSrc: "images/collin_dallas.jpg",
      imgAlt: "Dallas working with community members",
    },
  ];

  const contentContainer = document.querySelector(".content");

  contentContainer.innerHTML = "";

  contentData.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `item${index + 1}`;

    itemDiv.innerHTML = `
            <h2>${item.title}</h2>
            <aside>
                ${
                  item.isIframe
                    ? item.content
                    : `<img src="${item.imgSrc}" alt="${item.imgAlt}" />`
                }
            </aside>
            <p>${item.text}</p>
        `;

    contentContainer.appendChild(itemDiv);
  });
});
