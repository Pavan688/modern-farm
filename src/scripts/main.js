console.log("Welcome to the main module")

import { createPlan } from "./plan.js" 


let yearlyPlan = createPlan()

console.log(yearlyPlan)

import { plantSeeds } from "./tractor.js"

plantSeeds(yearlyPlan)

import { usePlants } from "./field.js"

console.log(usePlants())

import { harvestPlants } from "./harvester.js"
let harvest = harvestPlants(usePlants())
console.log(harvestPlants(usePlants()))

import { catalog } from "./catalog.js"

console.log(catalog(harvest))

const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = catalog(harvest)