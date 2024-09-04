const people = ["mario", "chris", "ndivhudza"];
const content = document.querySelector('.content')

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
})