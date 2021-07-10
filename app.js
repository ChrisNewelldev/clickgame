let cash = 0;
let cashPI = 0;
let cashPC = 0

let clickUpgrades = {
  
  shovel: {
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  bigShovel: {
    price: 50,
    quantity: 0,
    multiplier: 5
  }
};

let autoUpgrades = {
  employee: {
    price: 100,
    quantity: 0,
    multiplier: 10
  },
  crew: {
    price: 500,
    quantity: 0,
    multiplier: 25
  }
}



function buyShovel(){
if (cash >= clickUpgrades.shovel.price){ 
  cash = cash - clickUpgrades.shovel.price,
  clickUpgrades.shovel.quantity+=1,
  clickUpgrades.shovel.price+=1,
  cashPC = cashPC + clickUpgrades.shovel.multiplier
} else {
  alert('not enough cash')
}
update()
}

function buybigShovel(){
  if (cash >= clickUpgrades.bigShovel.price){ 
    cash = cash - clickUpgrades.bigShovel.price,
    clickUpgrades.bigShovel.quantity+=1,
    clickUpgrades.bigShovel.price+=5,
    cashPC = cashPC + clickUpgrades.bigShovel.multiplier
  } else {
    alert('not enough cash')
  }
  update()
}

function buyEmployee(){
  if (cash >= autoUpgrades.employee.price){
    cash = cash - autoUpgrades.employee.price,
    autoUpgrades.employee.quantity+=1,
    autoUpgrades.employee.price+=20,
    cashPI = cashPI + autoUpgrades.employee.multiplier
  } else {
    alert('not enough cash')
  }
  collectAutoUpgrades()
    update()
}

function buyCrew(){
    if (cash >= autoUpgrades.crew.price){
    cash = cash - autoUpgrades.crew.price,
    autoUpgrades.crew.quantity+=1,
    autoUpgrades.crew.price+=100,
    cashPI = cashPI + autoUpgrades.crew.multiplier
  } else {
    alert('not enough cash')
  }
  collectAutoUpgrades()
  update()
}

function collectAutoUpgrades(){
  if(cashPI > 0){
    cash = cash + cashPI,
    update()
  }
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
  update()
}

function mine (){
if (cashPC > 0){
cash = cash + cashPC
} else (cashPC == 0)
  cash+=1
update()
}


function update() {
  document.getElementById('clickUpgrades.shovel.quantity').innerText = clickUpgrades.shovel.quantity
  document.getElementById('clickUpgrades.bigShovel.quantity').innerText = clickUpgrades.bigShovel.quantity
  document.getElementById('autoUpgrades.employee.quantity').innerText = autoUpgrades.employee.quantity
  document.getElementById('autoUpgrades.crew.quantity').innerText = autoUpgrades.crew.quantity
  document.getElementById('cashPC').innerText = cashPC
  document.getElementById('cashPI').innerText = cashPI
  document.getElementById('cash').innerText = cash
  document.getElementById('clickUpgrades.shovel.price').innerText = clickUpgrades.shovel.price
  document.getElementById('clickUpgrades.bigShovel.price').innerText = clickUpgrades.bigShovel.price
  document.getElementById('autoUpgrades.employee.price').innerText = autoUpgrades.employee.price
  document.getElementById('autoUpgrades.crew.price').innerText = autoUpgrades.crew.price
}


startInterval()