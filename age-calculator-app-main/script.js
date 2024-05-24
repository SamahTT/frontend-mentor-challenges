const inputs = document.getElementsByTagName('input');
const labels = document.getElementsByTagName('label');
const warning_text = document.querySelectorAll('.small-text');
const btn = document.querySelector('.btn');
const year_result = document.querySelector('.y');
const month_result = document.querySelector('.m');
const day_result = document.querySelector('.d');
const date = new Date();
const current_year = date.getFullYear();
const current_month = date.getMonth();
const current_day = date.getDay();
let flag;

for (let i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener('input', () => {
        // store the value for easy access
        let value = inputs[i].value;
        let warning_msg = '';

        // Test different cases of invalid input 
        if (value === '') {
            warning_msg = 'This field is required';
        }
        else if (isNaN(value)) {
            warning_msg = 'Must be a number';
        }
        else if (i == 2 && value > current_year) {
            warning_msg = 'Must be in the past';
        }
        else if (i == 2 && value < current_year - 500) {
            warning_msg = 'This is way too old';
        }
        else if (i == 1 && (value > 12 || value < 1)) {
            warning_msg = 'Invalid Month';
        }
        else if (i == 0 && (value > 31 || value < 1)) {
            warning_msg = 'Invalid Day';
        }

        // Check mesaage content to add warning 
        if (warning_msg != '') {
            add_warning(i, warning_msg);
            year_result.textContent = '--';
            month_result.textContent = '--';
            day_result.textContent = '--';
        }
        // Clear warning 
        else {
            inputs[i].style.border = '';
            warning_text[i].textContent = '';
            labels[i].style.color = 'var(--Smokey-grey)';
        }
    })
}

btn.addEventListener('click', () => {
    // check if all warnings are empty 
    for (let i = 0; i < warning_text.length; i++) {
        if (warning_text[i].textContent != '') {
            flag = false;
            break;
        }
        else {
            flag = true;
        }
    }
    if (flag) {
        // calcualte age 
        calc_age();
    }


});

function add_warning(x, msg) {
    inputs[x].style.border = '2px solid var(--Light-red)';
    labels[x].style.color = 'var(--Light-red)';
    warning_text[x].textContent = msg;
}

function calc_age() {
    const current_date = new Date();
    const current_year = current_date.getFullYear();
    const current_month = current_date.getMonth() + 1;
    const current_day = current_date.getDate();

    const birth_day = parseInt(inputs[0].value);
    const birth_month = parseInt(inputs[1].value);
    const birth_year = parseInt(inputs[2].value);

    let years = current_year - birth_year;
    let months = current_month - birth_month;
    let days = current_day - birth_day;

    if (days < 0) {
        months -= 1;
        days += new Date(current_year, current_month - 1, 0).getDate();
    }
    
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    year_result.textContent = years;
    month_result.textContent = months;
    day_result.textContent = days;
}




