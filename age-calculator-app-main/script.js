const inputs = document.getElementsByTagName('input');
const warning_text = document.getElementsByClassName('.small-text');

for(let i = 0; i < inputs.length; i++){

    // Event listener for input (typing)
    inputs[i].addEventListener('focus', () => {
        inputs[i].style.border = '2px solid var(--Purple)';
    });
}
