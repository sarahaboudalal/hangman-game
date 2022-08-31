const letterContainer = document.querySelector('.letters');
const blanks = document.querySelector('.blanks')
const section = document.querySelector('section')

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

alphabets.map((element) => {
    const buttons = document.createElement('button')
    buttons.id = element;
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

let wrongCounter = 1;

function hangImg() {
    const img = document.querySelector("#hangImg");
    if (wrongCounter == 9)
        img.src = "./images/hang_img/default.png";
    else if (wrongCounter == 8)
        img.src = "./images/hang_img/step1.png";
    else if (wrongCounter == 7)
        img.src = "./images/hang_img/step2.png";
    else if (wrongCounter == 6)
        img.src = "./images/hang_img/step3.png";
    else if (wrongCounter == 5)
        img.src = "./images/hang_img/step4.png";
    else if (wrongCounter == 4)
        img.src = "./images/hang_img/step5.png";
    else if (wrongCounter == 3)
        img.src = "./images/hang_img/step6.png";
    else if (wrongCounter == 2)
        img.src = "./images/hang_img/step7.png";
    else if (wrongCounter == 1)
        img.src = "./images/hang_img/step8.png";
}

hangImg();