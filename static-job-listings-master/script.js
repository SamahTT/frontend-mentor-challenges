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
    tags[i].addEventListener('click', addElement())
}

function addElement(){
    let newValue = 'aa'
    searchList.innerHTML += 
    `<span class="tag">
    ${newValue}
    <img src="images/icon-remove.svg" alt="Remove Icon" class="remove">
    </span>`
}


