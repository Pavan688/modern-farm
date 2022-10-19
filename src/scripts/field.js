const plants = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject) === true) {
    for (const seed of seedObject) {
        plants.push(seed)
    }
    } else { 
        plants.push(seedObject)
    }
}

export const usePlants = () => {
return plants.map(crop => ({...crop}))
}
