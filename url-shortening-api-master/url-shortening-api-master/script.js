const navbarList = document.querySelector(".nav-links-list");
const authList = document.querySelector(".auth-links-list");
const mobileMenu = document.querySelector(".nav-links-mobile");
const urlInput = document.getElementById("url-input")
const shortenBtn = document.getElementById("shorten-btn")
const resultDiv = document.querySelector(".result")


window.addEventListener("resize", changeNavbarList);
shortenBtn.addEventListener("click", shortenURL)


function changeNavbarList() {
    if (window.innerWidth <= 855) {
        navbarList.innerHTML = `
        <li class="logo">
            <a href="#"><img src="./images/logo.svg" alt="Shortly Logo"></a>
        </li>`
        authList.innerHTML = `
        <li class="hamburger-list">
            <i class="fa-solid fa-bars"></i>
        </li>`
        const hamburgerList = document.querySelector(".hamburger-list");
        hamburgerList.addEventListener("click", displayMobileMenu);
    }
    else {
        navbarList.innerHTML = `
        <li class="logo">
          <a href="#"><img src="./images/logo.svg" alt="Shortly Logo"></a>
        </li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Resources</a></li>`;
        authList.innerHTML = `
        <li><a href="#">Login</a></li>
        <li><a href="#" class="cyan-btn">Sign Up</a></li>`;
    }
}

function displayMobileMenu() {
    mobileMenu.classList.add("active");
}

async function shortenWithTinyURL(url, apiToken, options = {}) {
    const requestBody = {
        url: url,
        domain: "tinyurl.com",
        ...options
    };
    
    try {
        const response = await fetch('https://api.tinyurl.com/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiToken}`
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        
        if (response.ok && data.data && data.data.tiny_url) {
            console.log(data.data.tiny_url)
            resultDiv.classList.add(".result-correct")
            resultDiv.textContent = data.data.tiny_url
        } 
        else {
            resultDiv.classList.add("result-error")
            resultDiv.textContent = "Something Went Wrong"
            return {
                success: false,
                error: data.errors?.[0]?.message || 'Unknown error'
            };
        }
    } catch (error) {
        resultDiv.classList.add("result-error")
        resultDiv.textContent = "Something Went Wrong"
        return {
            success: false,
            error: error.message
        };
    }
}

function shortenURL(){ 
    const apiToken = "API_TOKEN_HERE"
    shortenWithTinyURL(`${urlInput.value.trim()}`, apiToken);
    console.log("hello from function")
}


