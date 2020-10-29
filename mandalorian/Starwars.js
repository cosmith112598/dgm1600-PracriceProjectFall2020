import {films} from '../JS-files/films'


console.log('Javascript is Running')

let mainPiece = document.querySelector('main')


films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmInformation = document.createElement('p')

    filmTitle.textContent = film.title
    filmInformation.textContent = film.opening_crawl
    

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmInformation)

    mainPiece.appendChild(filmDiv)
});