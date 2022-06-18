let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let cont = document.getElementById('cont');
let catigory = document.getElementById('catigory');
let submit = document.getElementById('submit');

console.log('title' , 'price','taxes','ads','discount','total','cont','catigory','submit');

function gettotal(){
    if (price.value != '') {
        let result = +price.value + +taxes.value + +ads.value - +discount.value ;
        total.innerHTML = result;
        total.style.background = 'green' ;
    } else {
        total.innerHTML = '';
        total.style.background = 'red' ;
    }
    
};

var allpro

if (localStorage.products != null) {
    allpro = JSON.parse(localStorage.products);
} else {
    var allpro = [];
};

submit.onclick = function(){
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        cont:cont.value,
        catigory:catigory.value,
    }
    allpro.push(newpro);
    localStorage.setItem('products' , JSON.stringify(allpro));

    cleardata()
    showdata()
} 



    //clear input
    function cleardata() {
        title.value = '';
        price.value = '';
        taxes.value = '';
        ads.value = '';
        discount.value = '';
        total.innerHTML = '';
        cont.value = '';
        total.innerHTML = '';
        catigory = '';
    }

    

    //show data
    function showdata() {
        let table ='';
        for (let i = 0; i < allpro.length; i++) {
            table += `
                    <tr>
                        <td>${i}</td>
                        <td>${allpro[i].title}</td>
                        <td>${allpro[i].price}</td>
                        <td>${allpro[i].ads}</td>
                        <td>${allpro[i].taxes}</td>
                        <td>${allpro[i].total}</td>
                        <td>${allpro[i].catigory}</td>
                        <td>${allpro[i].discount}</td>
                        <td><button onclick="update(${i})">update</button></td>
                        <td><button onclick="delet(${i})">delat</button></td>
                    </tr>
            `
            
        }
        document.getElementById('tbody').innerHTML = table;

    }
    showdata()


    //delet
    function delet(i) {
        allpro.splice(i, 1);
        localStorage.products = JSON.stringify(allpro);
        showdata()
    }


    //update
    function update(i){
        console.log(i)
    }