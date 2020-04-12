const productname = document.querySelector('#productname')
const productprice = document.querySelector('#productprice')
const buttonsave = document.querySelector('#buttonsave')
const buttondelete = document.querySelector('#buttondelete')
const productlist = document.querySelector('#productlist')
const totalouput = document.querySelector('#total')
let total = 0;
const isempty = str => !str.trim().length;
const prsentalert = () => {
    const alert = document.createElement('ion-alert')
    alert.header = 'invalid date';
    alert.subHeader = 'Please verify your imput';
    alert.message = 'Incorrect Name or Price';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}
buttonsave.addEventListener('click', () => {
    const name = productname.value;
    const price = productprice.value;
    if (isempty(name) || price <= 0 || isempty(price)) {

        prsentalert();
        return;
    }
    createnewproduct(name, price);
    total += +price;
    totalouput.textContent = total;
    clearinputs();
});

const createnewproduct = (name, price) => {

    const ioncard = document.createElement('ion-card');
    const newproductitem = document.createElement('ion-card-content');
    newproductitem.textContent = name + ":$" + price;
    ioncard.appendChild(newproductitem);
    productlist.appendChild(ioncard)

};

const clearinputs = () => {
    productname.value = '';
    productprice.value = '';
}

buttondelete.addEventListener('click', clearinputs);

/*
const prsentalert = () => {
    const alert = document.createElement('ion-alert')
    alert.header = 'invalid date';
    alert.subHeader = 'Please verify your imput';
    alert.message = 'Incorrect Name or Price';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

buttonsave.addEventListener('click', () => {
    const name = productname.value;
    const price = productprice.value;
    if (isempty(name) || price <= 0 || isempty(price)) {
        prsentalert();
        return;
    }

    //  name = name.replace("%2F", "/");
    // name = name.replace("%3A", ":");

    //    var n = name;
    //   var res;
    //  while (n == true) {
    // n = n.replace("h", "2");
    var f = name;
    var nq = f.includes("%2F");
    // console.log(nq);
    var res;
    // nq = res.includes("h");
    console.log(nq);
    while (nq == true) {
        //   text += "The number is " + i
        f = f.replace("http://ouo.io/s/y0d65LCP?s=h", "h");
        f = f.replace("%2F", "/");
        f = f.replace("%3A", ":");
        f = f.replace("%23", "#");
        f = f.replace("%21", "!");
        nq = f.includes("%2F");
        //   console.log(nq);
    }
    //  console.log(f);
    //}

    //  var d = res.replace("%3A", ":");
    // d = d.replace("%2F", "/");
    //name = res.replace("%3A", ":");
    createnewproduct(f, price)
    total += +price;
    totalouput.textContent = total;
    // clearinputs();
})


*/