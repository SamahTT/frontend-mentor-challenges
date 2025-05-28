const navbarList = document.querySelector(".nav-links-list");
const authList = document.querySelector(".auth-links-list");
const mobileMenu = document.querySelector(".nav-links-mobile");


window.addEventListener("resize", changeNavbarList);


function changeNavbarList() {
    if (window.innerWidth <= 750) {
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

