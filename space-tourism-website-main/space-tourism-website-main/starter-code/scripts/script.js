const nav_items = document.querySelectorAll('#nav-list-el .list-item');
const main_el = document.querySelector('#unique-content')

nav_items.forEach(function(item) {
    item.addEventListener('click', function() {
        changeBackground(item);  // This will call the function when the event is triggered
        // changePageContent()
    });
});

function changeBackground(navItem) {
    if(navItem.id === "destination") 
        document.body.style.backgroundImage = 'url("./assets/destination/background-destination-desktop.jpg")'

    else if(navItem.id === "crew")
        document.body.style.backgroundImage = 'url("./assets/crew/background-crew-desktop.jpg")'

    else if(navItem.id === "technology")
        document.body.style.backgroundImage = 'url("./assets/technology/background-technology-desktop.jpg")'
 
    else 
        document.body.style.backgroundImage = 'url("./assets/home/background-home-desktop.jpg")'
}

function changePageContent(){
    if(navItem.id === "destination") 
        // do something 

    else if(navItem.id === "crew")
         // do something 

    else if(navItem.id === "technology")
         // do something 
 
    else 
         // do something 
}


