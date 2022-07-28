import { harvestPlants } from "./harvester"
// let thisLilPlantToMarket = harvestPlants(plantsBePlantin)
export const catalog = (harvestArr) => {
     let harvestString = ``
    for (const harvest of harvestArr){
        harvestString += 
        `<section class="plant"> ${harvest.type}</section>`
    }
    return harvestString
}
