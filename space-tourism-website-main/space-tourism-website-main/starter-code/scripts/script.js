const nav_items = document.querySelectorAll('#nav-list-el .list-item');
const main_el = document.querySelector('#unique-content')

nav_items.forEach(function (item) {
    item.addEventListener('click', function () {
        // This will call the function when the event is triggered
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

function changePageContent(navItem) {
    fetch('./destination-moon.html')
        .then(response => response.text())
        .then(data => {
            // Create a temporary DOM parser to extract content
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Extract the body content from dest.html
            const newContent = doc.main.innerHTML

            // Replace the current content of the index page
            main_el.innerHTML = newContent
        })
        .catch(error => console.error('Error fetching data', error))
}


