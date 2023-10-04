const data = localStorage.getItem('cartItem');
const cartArr = JSON.parse(data);
console.log(cartArr);

const div = document.querySelector('#main-div');
const grandtotal = document.querySelector('#grandtotal');

function renderCart() {
    let totalprice = 0
    for (let i = 0; i < cartArr.length; i++) {
        div.innerHTML += `
        <div>
                <img src="${cartArr[i].img}">        
                <p>brand: ${cartArr[i].brand}</p>
                <p>Model: ${cartArr[i].model}</p>
                <p>Quantity: ${cartArr[i].quantity}</p>
                <p>Price: ${cartArr[i].price}</p>
                <p>Total Price: ${cartArr[i].price * cartArr[i].quantity}</p>
                <button onclick="increasing(${i})">+</button>
                <span>${cartArr[i].quantity}</span>
                <button onclick="decreasing(${i})">-</button> <br/>
                <button onclick="empty(${i})">Delete</button>
                </div>
                `
                const itemtotal = cartArr[i].price * cartArr[i].quantity
                totalprice += itemtotal
            }
            grandtotal.innerHTML= `<p>total price: ${totalprice}</p>`
        }

renderCart()

function increasing(index) {
    div.innerHTML = ''
    console.log(cartArr[index])
    cartArr[index].quantity += 1
    renderCart()
}

function decreasing(index) {
    div.innerHTML = ''
    console.log(cartArr[index])
    cartArr[index].quantity -= 1
    renderCart()
    if (cartArr[index].quantity === 0) {
        div.innerHTML = ''
        cartArr.splice(index, 1)
        renderCart()
    }
}


function empty(index) {
    div.innerHTML = '';
    cartArr.splice(index, 1);
    renderCart()
}

function back() {
    window.location = 'index.html'
    localStorage.setItem("cartitems",items)


}

window.onbeforeunload = function(){
const items = JSON.stringify(cartArr)
localStorage.setItem("cartitems",items)
}









