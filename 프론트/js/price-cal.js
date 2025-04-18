let quantity = document.getElementsByName('quantity');
const q_minus = document.querySelectorAll('.quantity_minus');
const q_plus = document.querySelectorAll('.quantity_plus');
const price = document.getElementsByName('price');
const total = document.querySelector('#total');
const tInput = document.getElementsByName('total');

function totalSet(result){
    tInput[0].value = result;
    total.innerHTML = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
window.onload = function(){
    totalPrice = price[0].value * quantity[0].value + 3000;
    totalSet(totalPrice);
}

for(let i=0; i<quantity.length; i++){
    quantity[i].addEventListener('input',function(){
        quantity[i].value = quantity[i].value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

        if(Number(quantity[i].value) > 100){
            quantity[i].value = '100';
        }
        if(Number(quantity[i].value) <= 0){
            quantity[i].value = '1';
        }
        totalPrice = price[0].value * quantity[0].value;
        totalSet(totalPrice);
    })

    q_minus[i].addEventListener('click',function(){
        let n_quantity = Number(quantity[i].value)-1;
        if(n_quantity >= 1){
            quantity[i].value = String(n_quantity);
        }
        totalPrice = price[0].value * quantity[0].value + 3000;
        totalSet(totalPrice);
    })

    q_plus[i].addEventListener('click',function(){
        let n_quantity = Number(quantity[i].value)+1;
        if(n_quantity <= 100){
            quantity[i].value = String(n_quantity);
        }
        totalPrice = price[0].value * quantity[0].value + 3000;
        totalSet(totalPrice);
    })
}