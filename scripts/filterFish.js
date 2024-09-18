
 export const mostHolyFish = (fishes) => {
    const holyFish = []
// return multiples of 3 i.e. 3, 6, 9, 12, etc... fish

    for (let fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = (fishes) => {
    const soldiers = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const regularFish = (fishes) => {
    const regulars = []

    for (const fish of fishes) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regulars.push(fish)
        }
    }
   return regulars
}