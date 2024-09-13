import { database } from './aquariumData.js'
export const locationList = () => {
    let locationHTML = '<article class="locations">'

    for (const location of database.location){
        locationHTML += `
                <section class:"location">
                    <h1>${location.name}</h1>
                    <p>${location.country}</p>
                    <p>${location.description}</p>
                </section>    
        `
    } locationHTML += "</article>"
    return locationHTML
}