import { database } from './aquariumData.js'
export const tipList = () => {
    let tipHTML = '<ul class="tips-container">'


    for (const tip of database.tip){
        tipHTML += `
        
                <li class="tip">
                    <h3>${tip.topic}</h3>
                    <p>${tip.text}</p>
                </li>
           
        `
    } tipHTML += "</ul>"
     
    return tipHTML
}