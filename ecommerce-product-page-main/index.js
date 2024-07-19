// Quantity Button 
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

// Add Product to Cart
let cart_btn = document.querySelector('.add-to-cart')
let currentCartItems = 0

cart_btn.addEventListener('click', addItem)

function addItem(){
    if(qty > 0){
        currentCartItems += qty
        console.log('Items in cart = '+ currentCartItems)
        document.documentElement.style.setProperty('--cart-content', currentCartItems.toString())
    }
}

// Product Image Interactivity 
let product_image = document.querySelector('.product-img')
let thumbnails = document.querySelectorAll('.sm-img')
thumbnails.forEach((thumb) => thumb.addEventListener('click', display_image))

function display_image(event){
    let thumb = event.currentTarget
    if(thumb.alt == '1'){
        product_image.style.backgroundImage = 'url("images/image-product-1.jpg")'
    }
    else if(thumb.alt == '2'){
        product_image.style.backgroundImage = 'url("images/image-product-2.jpg")'
    }
    else if(thumb.alt == '3'){
        product_image.style.backgroundImage = 'url("images/image-product-3.jpg")'
    }
    else{
        product_image.style.backgroundImage = 'url("images/image-product-4.jpg")'
    }
}