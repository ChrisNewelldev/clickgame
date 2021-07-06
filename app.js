let cash = 0;

//maybe declare more variables??
//figure out the zero problem
const clickUpgrades = {
  shovel: {
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  bigshovel: {
    price: 500,
    quantity: 0,
    multiplier: 5
  }
};

const autoUpgrades = {
  employee: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  crew: {
    price: 5000,
    quantity: 0,
    multiplier: 110
  }
}

function buyshovel(){
if (cash >= clickUpgrades.shovel.price, 
  console.log('bought'),
  cash = cash - clickUpgrades.shovel.price)
update()}
 
function buybigshovel(){
  if (cash >= clickUpgrades.bigshovel.price , 
    console.log('bought'),
    cash = cash - clickUpgrades.bigshovel.price)
  update()
}

function buyemployee(){
  if (cash >= autoUpgrades.employee.price , 
    console.log('bought'),
    cash = cash - autoUpgrades.employee.price)
  update()
}

function buycrew(){
    if (cash >= autoUpgrades.crew.price , 
    console.log('bought'),
    cash = cash - autoUpgrades.crew.price)
  update()
}

function mine (){
(cash++)
update()
}


function update() {

  document.getElementById('cash').innerText = cash
 // number of upgrades bought
 // what the multiplier is
}

