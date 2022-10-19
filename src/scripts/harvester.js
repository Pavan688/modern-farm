import { usePlants } from "./field.js"
let copiedplants = usePlants()
export const harvestPlants = (plantsArray) => {
    let seedObject = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            plant.output = plant.output / 2
            for (let i = 1; i <= plant.output; i++) {
                seedObject.push(plant) 
            }
        } else 
            for (let i = 1; i <= plant.output; i++) {
                seedObject.push(plant) 
            }
        }
        return seedObject
    }