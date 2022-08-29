const letterContainer = document.querySelector('.letters');
const blanks = document.querySelector('.blanks')
const section = document.querySelector('section')

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

alphabets.map((element) =>{
    const buttons = document.createElement('button')
    buttons.innerText = element;
    letterContainer.appendChild(buttons)
})

fetch('https://random-word-api.herokuapp.com/word?number=1')
.then((response) => response.json())
.then((data) => {
   const singleLetters = data[0].split('')
   console.log(singleLetters)
   singleLetters.map((element) => {
   section.innerText += " ___ "
   })
})