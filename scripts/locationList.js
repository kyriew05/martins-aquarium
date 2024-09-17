import { database } from './aquariumData.js'
export const locationList = () => {
    let locationHTML = '<article class="locations-container">'

    for (const location of database.location){
        locationHTML += `
                <section class="location">
                    <h3>${location.name}</h3>
                    <h4>${location.country}</h4>
                    <p>${location.description}</p>
                </section>    
        `
    } locationHTML += "</article>"
    return locationHTML
}