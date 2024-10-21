const submitBtn = document.getElementById('submit-btn')
const inputEl = document.getElementById('input-el')

submitBtn.addEventListener('click', ()=>{
    console.log(inputEl.value)
    inputEl.value = ''
})