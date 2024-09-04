const searchList = document.getElementById('search-list-el')
const removeBtn = document.querySelectorAll('.remove')
const clearBtn = document.getElementById('clear-el')
const tags = document.querySelectorAll('.job-item .tag')

// Delete single element from search bar 
for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', function(event) {
        deleteFromList(event.target)
    })
}
function deleteFromList(btnClicked){
    btnClicked.parentElement.remove()
}

// Clear all search bar 
clearBtn.addEventListener('click', clearAll)
function clearAll(){
    searchList.innerHTML = ''
}

// Add element to search bar 
for(let i = 0; i < tags.length; i++){
    tags[i].addEventListener('click', function(event){
        let tagName = event.target.textContent.trim() 
        if(checkTag(tagName)){
            addElement(tagName); // Pass the text content
        }
    })
}

// Check if tag already in search bar
function checkTag(tagName){
    const existingTags = searchList.getElementsByClassName('tag')
    for(let i = 0; i < existingTags.length; i++){
        if(existingTags[i].textContent.trim() === tagName){
            return false
        }
    }
    return true
}

function addElement(tagName){
    // Create a new span element
    const newTag = document.createElement('span');
    newTag.className = 'tag';
    newTag.textContent = tagName;

    // Add a remove icon 
    const removeIcon = document.createElement('img');
    removeIcon.src = 'images/icon-remove.svg';
    removeIcon.alt = 'Remove Icon';
    removeIcon.className = 'remove';
    newTag.appendChild(removeIcon);

    // Add remove functionality
    removeIcon.addEventListener('click', function() {
        newTag.remove();
    });
    

    // Append the new tag to the searchList
    searchList.appendChild(newTag);
}



