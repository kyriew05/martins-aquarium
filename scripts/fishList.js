import { database } from './aquariumData.js';
export const fishList = () => {
    let fishHTML = '<div class="fish-image-container">'
        
    for (const fish of database.fish){
        fishHTML += `
            <article class="fish">
                    <img src="${fish.image}" alt="${fish.name} poster" class="fish_image">
                    <div class="fish_info">
                        <h3 class="fish_name">${fish.name}</h3>
                        <p class="fish_species">${fish.species}</p>
                        <p class="fish_length">${fish.length}</p>
                        <p class="fish_location">${fish.location}</p>
                        <p class="fish_diet">${fish.diet}</p>
                    </div>
                </article>
            `
    }
    return fishHTML += '</div>'
}; 
