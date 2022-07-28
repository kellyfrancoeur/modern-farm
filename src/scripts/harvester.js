let seedObjArr = []

export const harvestPlants = (plantsArr) => {
    for (const plant of plantsArr){
        if (plant.type === "Corn"){
         for (let i = 0; i < (plant.output/2); i++){
            seedObjArr.push(plant)
         }
     } else {
        for (let i = 0; i < plant.output; i++){
            seedObjArr.push(plant)
        }
     }
    }
    return seedObjArr
}