
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}
function fetchCharacters(){
  return fetch('https://anapioficeandfire.com/api/characters/1031')
  .then(resp => resp.json())
  .then(json => renderCharacters(json))
}

function renderCharacters(json) {
  const main = document.querySelector('main')
  h3 = document.createElement('h3')
  h3.innerHTML = `<h3>The 1031st character is: ${json.name}.</h3>`
  main.appendChild(h3);
}

function renderBooks(json) {
  const main = document.querySelector('main')
  let h3 = document.createElement('h3')
  h3.innerHTML = `<h3>The 5th book is: ${json[4].name}.`
  main.appendChild(h3);  
  
  
  const bookPages = [];
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
    
    //series pages
    bookPages.push(parseInt(book.numberOfPages));
  })

  let seriesPages = bookPages.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0);

  h3 = document.createElement('h3')
  h3.innerHTML = `<h3>The series has a total of ${seriesPages} pages.`
  main.appendChild(h3);
  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  fetchCharacters()

})
