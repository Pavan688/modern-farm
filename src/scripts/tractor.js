import { createAsparagus } from "./seeds/asparagus.js"


import { createCorn } from "./seeds/corn.js"


import { createSoybean } from "./seeds/soybean.js"


import { createWheat } from "./seeds/wheat.js"


import { createPotato } from "./seeds/potato.js"


import { createSunflower } from "./seeds/sunflower.js"


import { addPlant } from "./field.js"


export const plantSeeds = (yearPlan) => {
    for (const plan of yearPlan) {
        for (const field of plan) {
            if (field === "Soybean") {
                let soybean = createSoybean()
                addPlant(soybean)
            } else if (field === "Corn") {
                let corn = createCorn()
                addPlant(corn)
            } else if (field === "Potato") {
                let potato = createPotato()
                addPlant(potato)
            } else if (field === "Asparagus") {
                let asparagus = createAsparagus()
                addPlant(asparagus)
            } else if (field === "Wheat") {
                let wheat = createWheat()
                addPlant(wheat)
            } else if (field === "Sunflower") {
                let sunflower = createSunflower()
                addPlant(sunflower)
            }
        }
    }

}