let productData = document.querySelector('#data');

let addBtn = document.querySelector('#btn');

function addProduct() {
    let form = document.querySelector('#myForm');
    let nam = form.name.value;
    let price = form.price.value;
    let image = form.img.value;


    let product = {
        nam,
        price,
        image
    }
    
    let arr;

    arr = localStorage.getItem('produts');

    if (arr == null) {
        arr = [];
    }
    else {
        arr = arr = JSON.parse(localStorage.getItem('products'));
    }

    arr.push(product);
    localStorage.setItem('products', JSON.stringify(arr));
    
    showProduct();
}
addBtn.addEventListener("click", function (e) {
    addProduct();

});

function appendProduct(el) {
   
    var div = document.createElement("div");
 
    let pNam = document.createElement("p");
    pNam.innerHTML = el.nam;

    let pPrice = document.createElement("p");
    pPrice.innerHTML = el.price;
    
    let pImg = document.createElement("img");
    pImg.src = el.image;

    let button = document.createElement("button");
    button.textContent = "Add to Cart";

    div.append(pNam, pPrice, pImg,button);
    
    productData.append(div);

}

function showProduct() {
    let data = JSON.parse(localStorage.getItem("products"));

    productData.innerHTML = null;

    data.forEach(function (el) {
        appendProduct(el);
    })
}

showProduct();


