//  const article = document.getElementById("vip")
//const articles = document.getElementsByTagName(`article`)
//const purple = document.getElementsByClassName(`purple`)
//const purpleQuery = document.querySelector(`.purple`)
//const allArticles = document.querySelectorAll(`article`)

//console.log(purpleQuery)

const purple = document.querySelector(`.purple`)
const button = document.querySelector(`button`)
let link = document.querySelector(`.purple a`)
button.addEventListener(`click`, ()=> {
    const color = document.querySelector('input').value;
    purple.style.backgroundColor = color; // atributo pridejimas
})

purple.addEventListener(`click`,()=>{
    purple.style.textTransform = 'uppercase'
    link.href ="http://www.kitm.lt"
})