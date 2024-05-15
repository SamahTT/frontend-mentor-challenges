const inputs = document.getElementsByTagName('input');
const warning_text = document.querySelectorAll('.small-text');
const btn = document.querySelector('.btn');

for (let i = 0; i < inputs.length; i++) {

    // Event listener for input (typing)
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
        else {
            inputs[i].style.border = ''; // Reset border
            warning_text[i].textContent = ''; // Clear warning text
        }
    }
});