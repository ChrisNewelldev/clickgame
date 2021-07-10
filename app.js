let cash = 0;
//let arrayOfObjects = [shovel, bigShovel, ]

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
    price: 5000,
    quantity: 0,
    multiplier: 7
  }
}



function buyShovel(){
if (cash >= clickUpgrades.shovel.price){ 
  cash = cash - clickUpgrades.shovel.price,
  console.log('bought'),
  clickUpgrades.shovel.quantity+=1,
  clickUpgrades.shovel.multiplier+=1
} else {
  console.log('not enough cash')
}
update()
}

function buybigShovel(){
  if (cash >= clickUpgrades.bigShovel.price){ 
    cash = cash - clickUpgrades.bigShovel.price,
    console.log('bought'),
    clickUpgrades.bigShovel.quantity+=1,
    clickUpgrades.bigShovel.multiplier+=1
  } else {
    console.log('not enough cash')
  }
  update()
}

function buyemployee(){
  if (cash >= autoUpgrades.employee.price){
    console.log('bought'),
    cash = cash - autoUpgrades.employee.price,
    autoUpgrades.employee.quantity+=1,
    autoUpgrades.employee.multiplier+=1
  }
    update()
}

function buycrew(){
    if (cash >= autoUpgrades.crew.price){ 
    console.log('bought'),
    cash = cash - autoUpgrades.crew.price,
    autoUpgrades.crew.quantity+=1
  }
  update()
}

function collectAutoUpgrades(){
  if(autoUpgrades.employee.quantity > 0){
cash = cash + autoUpgrades.employee.multiplier
  }
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function mine (){
if (clickUpgrades.shovel.quantity > 0){
cash +=1*clickUpgrades.shovel.multiplier
} else if (clickUpgrades.bigShovel.quantity > 0){
  cash +=1*clickUpgrades.bigShovel.multiplier
}
(cash +=1)
update()
}


function update() {

  document.getElementById('cash').innerText = cash
  document.getElementById('clickUpgrades.shovel.quantity').innerText = clickUpgrades.shovel.quantity
  document.getElementById('clickUpgrades.shovel.multiplier').innerText = clickUpgrades.shovel.multiplier
}


