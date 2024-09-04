const title = document.getElementById('page-title');
// console.log(title) 

const errors = document.getElementsByClassName('error')
console.log(errors)
console.log(errors[0])
console.log(errors[1])

//forEach can't be used on HTMLCollection
/* errors.forEach(element => {
    console.log(element)
}); */

//getElementByTagName gives us an HTML Collection
const paras = document.getElementsByTagName('p')
console.log(paras)
console.log(paras[0].innerText) //property
console.log(paras[1].innerText)