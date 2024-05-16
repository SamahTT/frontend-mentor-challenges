const inputs = document.getElementsByTagName('input');
const warning_text = document.querySelectorAll('.small-text');
const btn = document.querySelector('.btn');
const date = new Date();

for (let i = 0; i < inputs.length; i++) {

    // Event listener for input 
    inputs[i].addEventListener('focus', () => {
        inputs[i].style.border = '2px solid var(--Purple)';
    });
}

btn.addEventListener('click', () => {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].style.border = '2px solid var(--Light-red)';
            warning_text[i].textContent = 'This field cannot be empty';
        }
        else if (!isDigit(inputs[i].value)) {
            inputs[i].style.border = '2px solid var(--Light-red)';
            warning_text[i].textContent = 'Invalid value';
        }
        else {
            inputs[i].style.border = ''; // Reset border
            warning_text[i].textContent = ''; // Clear warning text
            //let years = current_year - year_born;
            //let months = current_month - month_born;
            //let days = currnet_day - day_born; 
            //if(months){
                //
            //}
            //else{

            //}

        }
    }
});

function isDigit(value) {
    return /^\d$/.test(value);
}
