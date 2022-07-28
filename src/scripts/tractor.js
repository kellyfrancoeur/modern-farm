import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
let listPlants = usePlants()

export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan){
        for (const plant of row){
            if (plant === "Asparagus"){
                listPlants.push(addPlant(createAsparagus()))
            } else if (plant === "Corn"){
                listPlants.push(addPlant(createCorn()))
            } else if (plant === "Potato"){
                listPlants.push (addPlant(createPotato()))
            } else if (plant === "Wheat"){
                listPlants.push (addPlant(createWheat()))
            } else if (plant === "Soybean") {
                listPlants.push (addPlant(createSoybean()))
            } else {listPlants.push (addPlant(createSunflower()))
            }
        }
    }
}