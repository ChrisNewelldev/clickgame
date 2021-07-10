let cash = 0;
//let arrayOfObjects = [shovel, bigShovel, ]

let clickUpgrades = {
  
  shovel: {
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  bigShovel: {
    price: 500,
    quantity: 0,
    multiplier: 5
  }
};

let autoUpgrades = {
  employee: {
    price: 600,
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
  let shovel = 0
if (cash >= clickUpgrades.shovel.price){ 
  cash = cash - clickUpgrades.shovel.price,
  console.log('bought'),
  clickUpgrades.shovel.quantity++,
  clickUpgrades.shovel.multiplier++
} else {
  console.log('not enough cash')
}
update()
}

function buybigShovel(){
  if (cash >= clickUpgrades.bigShovel.price , 
    console.log('bought'))
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
(cash +=1*clickUpgrades.shovel.quantity)
update()
}


function update() {

  document.getElementById('cash').innerText = cash
  document.getElementById('clickUpgrades.shovel.quantity').innerText = clickUpgrades.shovel.quantity
  document.getElementById('clickUpgrades.shovel.multiplier').innerText = clickUpgrades.shovel.multiplier
}

