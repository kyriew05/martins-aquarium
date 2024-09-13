import { fishList } from './fishList.js'
// import { tipList } from './tipList.js'
// import { locationList } from './locationList.js'
const fish = document.getElementById("fishList")
// Generate the fish list
const fishHTML = fishList() 
fish.innerHTML = fishHTML


// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element