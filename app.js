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
    multiplier: 3
  },
  crew: {
    price: 500,
    quantity: 0,
    multiplier: 7
  }
}



function buyShovel(){
if (cash >= clickUpgrades.shovel.price){ 
  cash = cash - clickUpgrades.shovel.price,
  alert('bought'),
  clickUpgrades.shovel.quantity+=1,
  cashPC = cashPC + clickUpgrades.shovel.multiplier
} else {
  alert('not enough cash')
}
update()
}

function buybigShovel(){
  if (cash >= clickUpgrades.bigShovel.price){ 
    cash = cash - clickUpgrades.bigShovel.price,
    alert('bought'),
    clickUpgrades.bigShovel.quantity+=1,
    cashPC = cashPC + clickUpgrades.bigShovel.multiplier
  } else {
    alert('not enough cash')
  }
  update()
}

function buyEmployee(){
  if (cash >= autoUpgrades.employee.price){
    alert('bought'),
    cash = cash - autoUpgrades.employee.price,
    autoUpgrades.employee.quantity+=1,
    cashPI = cashPI + autoUpgrades.employee.multiplier
  } else {
    alert('not enough cash')
  }
  collectAutoUpgrades()
    update()
}

function buyCrew(){
    if (cash >= autoUpgrades.crew.price){ 
    alert('bought'),
    cash = cash - autoUpgrades.crew.price,
    autoUpgrades.crew.quantity+=1,
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
}


startInterval()