const productPrice = document.getElementsByName('product_price');
const productDiscount = document.getElementsByName('product_discount');
const productQuantity = document.getElementsByName('product_quantity');
let savePrevPrice = null;
let savePrevQuantity = null;
let savePrevDiscount = null;


for(let i=0; i<productPrice.length; i++){
    productPrice[i].addEventListener('input', function(){
        cantminus(productPrice[i]);
        savePrevPrice = productPrice[i].value;
    })
}

for(let i=0; i<productDiscount.length; i++){
    productDiscount[i].addEventListener('input',function(){
        set100(productDiscount[i]);
        savePrevDiscount = productDiscount[i].value;
    })
}

for(let i=0; i<productQuantity.length; i++){
    productQuantity[i].addEventListener('input',function(){
        Qlimit(productQuantity[i]);
        savePrevQuantity = productQuantity[i].value;
    })
}
// 가격, 문자제한
function cantminus(set){
    let isval = Number(set.value);

    if(set.value < 0){
        alert('양수만 입력가능합니다.');
        if(savePrevPrice == null){
            set.value = 0;
        }else{
            set.value = savePrevPrice;
            return false;
        }
    }

    if(set.value > 1000000000){
        alert('가격은 1000000000을 초과 할 수 없습니다.');
        if(savePrevPrice == null){
            set.value = 0;
        }else{
            set.value = savePrevPrice;
            return false;
        }
    }

    if(isNaN(isval)){
        set.value = savePrevPrice;
        return false;
    }else{
        set.value = isval;
    }

    savePrevPrice = set.value;
}

// 할인율, 문자 제한
function set100(set){
    if(set.value > 90){
        alert('최대 90까지 입력가능합니다.');
        set.value = savePrevDiscount;
    }
    if(set.value < 0){
        alert('최소 0까지 입력가능합니다.');
        set.value = savePrevDiscount;
    }
    let isval = Number(set.value);
    if(isNaN(isval)){
        set.value = savePrevDiscount;
    }else{
        set.value = isval;
    }
}

//수량, 문자제한
function Qlimit(quan){
    if(quan.value > 99999){
        alert('재고수량은 99999를 초과 할 수 없습니다.')
        quan.value = savePrevQuantity;
        return false;
    }

    let isval = Number(quan.value);
    if(isNaN(isval)){
        quan.value = savePrevQuantity;
    }else{
        quan.value = isval;
    }
}