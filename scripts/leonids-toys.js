const hulkFigure = {
    name: "Incredible Hulk",
    price: 13.44,
    universe: "Marvel"
}

const spidermanFigure = {
    name: "Spiderman",
    price: 9.97,
    universe: "Marvel"    
}

const thorFigure = {
    name: "Thor Odin Son",
    price: 74.57,
    universe: "Marvel"
     
}

const toys = [
    {
        id: 1,
        name: "Captain America",
        price: 11.95,
        universe: "Marvel"                
    },
    {
        id: 2,
        name: "Superman",
        price: 13.28,
        universe: "DC"
    },
    {
        id: 3,
        name:"Batman",
        price: 21.75,
        universe: "DC"
    },
    {
        id: 4,
        name: "Flash",
        price: 14.99,
        universe: "DC"
    }
]

/* console.log (spidermanFigure)
 console.log (toys);


 console.log(toys)
*/

function addToys(object) {
    object.id = toys.length + 1
    toys.push(object)
}

addToys(thorFigure);
addToys(hulkFigure);
addToys(spidermanFigure);


// console.log(toys);

const scarlettFigure = {
    name: "Scarlett Witch",
    price: 32.56,
    universe: "Marvel"
}

addToys(scarlettFigure);

const greenFigure = {
    name: "Green Arrow",
    price: 52.88,
    universe: "DC"
}

addToys(greenFigure);

/* console.log(toys);

for (const toy of toys) {
  console.log(toy.name)
}

for(const toy of toys) {
console.log( `The brand new ${toy.name} action figure can be yours for the low price of $${toy.price}!`)
}


for(const toy of toys) {
    console.log( `The brand new ${toy.name} action figure can be yours for the low price of $${toy.price}!`)
}

for(const toy of toys) {
    toy.price *= 1.05
   console.log(toy.price)
}

for(const toy of toys) {
    toy.price *=1.25
    console.log(`Unfortunately, dear valued customer, due to the business needs the ${toy.name} will have a new price of $${toy.price}. We apologize for any inconvenience`)
}

 const toyToFind = 7 ;

for(const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price *= 1.05
       console.log(`The new ${toy.name} can be yours for the low price of $${toy.price}`)
    }
}*/

const visionFigure = {
    name: "Vision",
    price: 13.29,
    universe: "Marvel"
}

addToys(visionFigure);

//console.log(toys);

for(const toy of toys){
    toy.price *= 1.0925
    console.log(`The brand new ${toy.name} action figure from the ${toy.universe} universe can be yours for the low price of $${toy.price}!`)
}
