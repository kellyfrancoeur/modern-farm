// import { createCorn } from "./seeds/corn.js"
// let field = []
let ifYouBuildIt = []
export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)){
        let jimmyCrack = {
            type: "Corn",
            height: 180,
            output: 6
        }
        ifYouBuildIt.push(jimmyCrack)
        ifYouBuildIt.push(jimmyCrack)
    } else {
        ifYouBuildIt.push(seedObj)
    }
    
}

export const usePlants = () =>{
    let copyIfYouBuildIt = [...ifYouBuildIt]
    return copyIfYouBuildIt
}
