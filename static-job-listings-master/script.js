const searchList = document.getElementById('search-list-el')
const removeBtn = document.querySelectorAll('.remove')
const clearBtn = document.getElementById('clear-el')
const tags = document.querySelectorAll('.job-item .tag')
const jobItems = document.querySelectorAll('.job-item')
const jobItemsNames = document.querySelectorAll('.job-item .company');

// Delete single element from search bar 
for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', function (event) {
        deleteFromList(event.target)
    })
}
function deleteFromList(btnClicked) {
    btnClicked.parentElement.remove()
    searchJobs()
}

// Clear all search bar 
clearBtn.addEventListener('click', clearAll)
function clearAll() {
    searchList.innerHTML = ''
    searchJobs()
}

// Add element to search bar 
for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function (event) {
        let tagName = event.target.textContent.trim()
        if (checkTag(tagName)) {
            addElement(tagName); // Pass the text content
        }
    })
}

// Check if tag already in search bar
function checkTag(tagName) {
    const existingTags = searchList.getElementsByClassName('tag')
    for (let i = 0; i < existingTags.length; i++) {
        if (existingTags[i].textContent.trim() === tagName) {
            return false
        }
    }
    return true
}

function addElement(tagName) {
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
    removeIcon.addEventListener('click', function () {
        newTag.remove();
    });

    // Append the new tag to the searchList
    searchList.appendChild(newTag);

    // Call search function
    searchJobs()
}

// Search functionality 
// Fetch data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        myData = data
        // Access specific data like: data.someKey
        console.log(data[0].company)
    })
    .catch(error => console.error('Error fetching data:', error));


function searchJobs() {

    const existingTags = searchList.getElementsByClassName('tag');
    let filters = [];

    // Collect filters from the tags
    for (let i = 0; i < existingTags.length; i++) {
        filters.push(existingTags[i].textContent.trim());
    }

    // Collect company names
    let companyNames = [];
    for (let i = 0; i < 10; i++) {
        companyNames.push(myData[i].company);
    }

    // Iterate through company names and pop those not in filters
    for (let i = 0; i < filters.length; i++) {
        for (let x = 0; x < 10; x++) {
            let job = myData[x]
            let categories = [];
            categories = categories.concat(job.tools);
            categories = categories.concat(job.languages);
            categories.push(job.role);  // role is a string
            categories.push(job.level); // level is a string
            if (!categories.includes(filters[i])) {
                companyNames.splice(x, 1); // Remove company name by index
            }
        }
    }
    renderJobs(companyNames)
}

function renderJobs(companyNames){
    console.log('Im in render jobs')
    console.log(companyNames)
    for(let i = 0; i < jobItemsNames.length ; i++){
        if(!companyNames.includes(jobItemsNames[i].textContent)){
            jobItems[i].style.display = 'none';
        }
        else{
            jobItems[i].style.display = 'flex';
        }
    }
}
  


