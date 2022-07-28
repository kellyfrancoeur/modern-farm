// console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant, usePlants } from "./field.js"
// import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

const yearlyPlan = createPlan()
console.log (yearlyPlan)

const asparagusSeed = createAsparagus()
// console.log (asparagusSeed)
const cornSeed = createCorn()
// console.log (cornSeed)
const potatoSeed = createPotato ()
// console.log(potatoSeed)
const wheatSeed = createWheat ()
// console.log (wheatSeed)
const soybeanSeed = createSoybean()
// console.log (soybeanSeed)
const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// const fieldOfDreams = addPlant(wheatSeed)
// const farmin = usePlants(fieldOfDreams)
// console.log(farmin)

plantSeeds(yearlyPlan)
const plantsBePlantin = usePlants()
console.log (plantsBePlantin)
let thisLilPlantToMarket = harvestPlants(plantsBePlantin)
let thisLilPlantToSell = []

for (let harvest of thisLilPlantToMarket){
    thisLilPlantToSell.push(harvest.type + " ")
}
document.querySelector (".harvester").innerHTML = thisLilPlantToSell