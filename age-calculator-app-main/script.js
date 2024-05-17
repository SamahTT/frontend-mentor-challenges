const inputs = document.getElementsByTagName('input');
const warning_text = document.querySelectorAll('.small-text');
const btn = document.querySelector('.btn');
const year_result = document.querySelector('.y');
const month_result = document.querySelector('.m');
const day_result = document.querySelector('.d');
const date = new Date();

for (let i = 0; i < inputs.length; i++) {

    // Event listener for input 
    inputs[i].addEventListener('focus', () => {
        inputs[i].style.border = '2px solid var(--Purple)';
    });
}

btn.addEventListener('click', () => {
    check_input(inputs);

    const current_year = date.getFullYear();
    const current_month = date.getMonth();
    const current_day = date.getDay();
    const years = current_year - inputs[2].value;
    const months = current_month - inputs[1].value;
    const days = current_day - inputs[0].value; 
    console.log(years + months + days);
    if(months){
        year_result.textContent = years;
        month_result.textContent = months; 
        day_result.textContent = days;
    }
    //else if(months == 0){

    //}
});

function check_input(x){
    for (let i = 0; i < x.length; i++) {
        if (x[i].value === '') {
            x[i].style.border = '2px solid var(--Light-red)';
            warning_text[i].textContent = 'This field cannot be empty';
        }
        //else if (!isDigit(inputs[i].value)) {
        //    inputs[i].style.border = '2px solid var(--Light-red)';
        //    warning_text[i].textContent = 'Invalid value';
        ///}
        else {
            inputs[i].style.border = ''; // Reset border
            warning_text[i].textContent = ''; // Clear warning text
        }
    }
}

function isDigit(value) {
    return /^\d$/.test(value);
}
