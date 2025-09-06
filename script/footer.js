const year = new Date().getFullYear()
const day = new Date().getDay();
const month = new Date().getMonth();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();

const lastModificationDate = new Date(document.lastModified)

document.querySelector('#lastModified')
  .innerHTML = `@${year} Cedou Ramsey Pretoria pretoria SA`

console.log(document.querySelector('#currentyear')
  .innerHTML = `last Modification : ${day}/${month}/${year} 
                ${hours}/${minutes}/${seconds}`)
