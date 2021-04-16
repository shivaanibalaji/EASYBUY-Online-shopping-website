let cartButton= document.querySelectorAll('.btn-shop');



let products=[
    {
        name: 'Salwar Kameez',
        tag:'Salwar',
        price:3499,
        inCart:0
    },
    {
        name: 'Sneakers',
        tag:'Sneakers',
        price:499,
        inCart:0
    },
    {
        name: 'Leather bag',
        tag:'bag',
        price:1849,
        inCart:0
    },
    {
        name: 'Leather bag',
        tag:'bag',
        price:1849,
        inCart:0
    },
    {
        name: 'Perfume',
        tag:'perfume',
        price:899,
        inCart:0
    }
]


for(let i=0;i<cartButton.length;i++)
{
    cartButton[i].addEventListener('click',()=>{
        alert("This item is added to cart");
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
    
}
function onloadCart(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('#no').textContent=productNumbers;

    }
}


function cartNumbers(products)
{
    
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
   if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('#no').textContent=productNumbers+1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('#no').textContent=1;
    }
    seItems(products);
    
}

function seItems(products)
{
    let cartItems=localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);
   

    if(cartItems!=null){
        if(cartItems[products.tag]== undefined){
            cartItems={
                ...cartItems,
                [products.tag]:products
            }
        }
        cartItems[products.tag].inCart+=1;
    }
    else{
    products.inCart=1;
    cartItems={
        [products.tag]:products
    }
  }
  
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(products){
    let cartCost=localStorage.getItem('totalCost');
   
    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+products.price);
    }
    else{
    localStorage.setItem('totalCost',products.price);
    }
}

onloadCart();




























/*$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
});*/

