const nav_items = document.querySelectorAll('#nav-list-el .list-item');
const main_el = document.querySelector('#unique-content')


nav_items.forEach(function (item) {
    item.addEventListener('click', function () {
        // This will call the functions when the event is triggered
        changeBackground(item)  
        changePageContent(item)
    });
});

function changeBackground(navItem) {
    if (navItem.id === "destination")
        document.body.style.backgroundImage = 'url("./assets/destination/background-destination-desktop.jpg")'

    else if (navItem.id === "crew")
        document.body.style.backgroundImage = 'url("./assets/crew/background-crew-desktop.jpg")'

    else if (navItem.id === "technology")
        document.body.style.backgroundImage = 'url("./assets/technology/background-technology-desktop.jpg")'

    else
        document.body.style.backgroundImage = 'url("./assets/home/background-home-desktop.jpg")'
}

const pageMap = {
    destination: './destination-moon.html',
    crew: './crew-commander.html',
    technology: './technology-capsule.html',
    home: './home.html' // Adjust as needed
};

function changePageContent(navItem) {
    fetch(pageMap[navItem.id])
        .then(response => response.text())
        .then(data => {
            // Create a temporary DOM parser to extract content
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Extract the main content
            const newContent = doc.querySelector('main').innerHTML;

            // Replace the current content of the index page
            main_el.innerHTML = newContent
        })
        .catch(error => console.error('Error fetching data', error))
}


