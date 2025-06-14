const darkModeBtn = document.getElementById("dark-mode-btn")


darkModeBtn.addEventListener("click", toggleDarkMode)

fetch("data.json")
    .then((res) => res.json())
    .then(
        (data) => {
            let countryObj = {
                name: '',
                population: '',
                region: '',
                capital: '',
                flag: '',
                native_name: '',
                sub_region: '',
                top_level_domain: '',
                currencies: '',
                languages: ''
            }
            let countries = []
            for (let country of data) {
                countryObj.name = country.name
                countryObj.population = country.population
                countryObj.region = country.region
                countryObj.capital = country.capital
                countryObj.flag = country.flag
                countryObj.native_name = country.nativeName
                countryObj.sub_region = country.subregion
                countryObj.top_level_domain = country.topLevelDomain[0]
                //countryObj.currencies = country.currencies[0].code
                countryObj.languages = country.languages[0].name

                countries.push(countryObj)
            }
            renderCountries(data)
        })


function renderCountries(countries) {
    console.log(countries)
    let countryPrevText = ``
    for (let i = 0; i < 20; i++) {
        countryPrevText +=
            `<div class="country-preview-el">
                <div class="flag-img-div"></div>
                <div class="country-details-div">
                    <h3>${countries[i].name}</h3>
                    <p>Population: <span id="population-span">${countries[i].population}</span></p>
                    <p>Region: <span id="region-span">${countries[i].region}</span></p>
                    <p>Capital: <span id="capital-span">${countries[i].capital}</span></p>
                </div>
            </div>`
    }
    document.querySelector(".previews-container").innerHTML = countryPrevText
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode")
    if (darkModeBtn.textContent.trim() === "Dark Mode") {
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode'
    }
    else
        darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode'
}
