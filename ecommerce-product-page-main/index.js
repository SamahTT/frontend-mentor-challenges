// Quantity button 
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let qty_result = document.querySelector('.qty-btn span')
let qty = 0

minus.addEventListener('click', decrease_qty)
plus.addEventListener('click', increase_qty)

function decrease_qty(){
    if(qty > 0){
        qty--
        qty_result.textContent = qty
    }
}

function increase_qty(){
    qty++
    qty_result.textContent = qty
}