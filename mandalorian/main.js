/* add actual file after you fix the issues*/
import {planets} from '../JS-Files/planets.js'

console.log('Javascript is Running')

let mainPiece = document.querySelector('main')

planets.forEach(function(planet) {
    let planetDiv = document.createElement('div')
    let planetName = document.createElement('h1')
    let planetInformation = document.createElement('p')

    planetName.textContent = planet.name
    planetInformation.textContent = planet.residents


    planetDiv.appendChild(planetName)
    planetDiv.appendChild(planetInformation)

    mainPiece.appendChild(planetDiv)
});
// fix this code!!!!