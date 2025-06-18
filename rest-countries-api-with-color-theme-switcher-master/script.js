const darkModeBtn = document.getElementById("dark-mode-btn")
const regionInput = document.getElementById("region-filter")
const nameInput = document.getElementById("name-search")
let countriesArr = []


darkModeBtn.addEventListener("click", toggleDarkMode)


fetch("data.json")
    .then((res) => res.json())
    .then(
        (data) => {
            /*let countryObj = {
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
            }*/
            countriesArr = data
            renderCountries(countriesArr)
        })


function renderCountries(countries) {
    console.log(countries)
    let countryPrevText = ``
    for (let i = 0; i < Math.min(countries.length, 20); i++) {
        countryPrevText +=
            `<div class="country-preview-el" data-country-name=${countries[i].name}>
                <div class="flag-img-div" style="background-image:url(${countries[i].flag})"></div>
                <div class="country-details-div">
                    <h3>${countries[i].name}</h3>
                    <p>Population: <span id="population-span">${countries[i].population}</span></p>
                    <p>Region: <span id="region-span">${countries[i].region}</span></p>
                    <p>Capital: <span id="capital-span">${countries[i].capital}</span></p>
                </div>
            </div>`
    }
    document.querySelector(".previews-container").innerHTML = countryPrevText
    document.querySelectorAll(".country-preview-el").forEach(el => {
        el.addEventListener("click", () => {
            renderDetailes(el.dataset.countryName)
        })
    })
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode")
    if (darkModeBtn.textContent.trim() === "Dark Mode")
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode'
    else
        darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode'
}


function renderDetailes(name) {
    const filteredCountries = countriesArr.filter((country) => {
        return country.name === name
    })
    console.log(filteredCountries)
    let detailesHTMLText = 
                `<h1>${filteredCountries.name}</h1>

                <div class="detailes-col-wrapper">
                    <div class="details-col">
                        <p>Native Name: <span id="native-name-span">${filteredCountries.nativeName}</span></p>
                        <p>Population: <span id="population-span">${filteredCountries.population}</span></p>
                        <p>Region: <span id="region-span">${filteredCountries.region}</span></p>
                        <p>Sub Region: <span id="sub-region-span">${filteredCountries.subRegion}</span></p>
                        <p>Capital: <span id="capital-span">${filteredCountries.capital}</span></p>
                    </div>

                    <div class="details-col">
                        <p>Top Level Domain: <span id="top-level-domain-span">${filteredCountries.topLevelDomain}</span></p>
                        <p>Currencies: <span id="currencies-span">${filteredCountries.currencies}</span></p>
                        <p>Languages: <span id="languages-span">${filteredCountries.languages}</span></p>
                    </div>
                </div>

                <p id="border-countries-el">Border Countires: <span class="border-span">--</span></p>`

    
    window.location.href = "detailes.html"
    document.querySelector(".detailes-text-div").innerHTML = detailesHTMLText
   
}

if(nameInput)
    nameInput.addEventListener("input", filterByName)
if(regionInput)
    regionInput.addEventListener("change", filterByRegion)

function filterByRegion() {
    let region = regionInput.value
    if (region === "reset") {
        renderCountries(countriesArr)
    }
    else {
        const filteredCountries = countriesArr.filter((country) => {
            return country.region === region
        })
        renderCountries(filteredCountries)
    }
}

function filterByName() {
    let name = nameInput.value.toLowerCase()
    const filteredCountries = countriesArr.filter((country) => {
        return country.name.toLowerCase().includes(name)
    })
    renderCountries(filteredCountries)
}




