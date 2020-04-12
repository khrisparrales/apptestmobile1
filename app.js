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

