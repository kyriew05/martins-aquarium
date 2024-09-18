import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { database } from './aquariumData.js'

const fish = document.getElementById("fishList")
const tip = document.getElementById("tipList")
const location = document.getElementById("locationList")

import { mostHolyFish, soldierFish, regularFish } from './filterFish.js'
const holyFish = mostHolyFish(database.fish)
const soldiers = soldierFish(database.fish)
const regulars = regularFish(database.fish)

console.log(holyFish)

// Generate the fish list
const fishHTML = fishList() 
fish.innerHTML = fishHTML


// Generate the care tips
const tipHTML = tipList()
tip.innerHTML = tipHTML

// Generate the location list
const locationHTML = locationList()
location.innerHTML = locationHTML

// Render each HTML string to the correct DOM element
// .innerHTML = `${holyFish}${soldiers}${regulars}`