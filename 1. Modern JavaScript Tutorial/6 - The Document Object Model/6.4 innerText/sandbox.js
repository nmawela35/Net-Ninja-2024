const para = document.querySelector('p')

// para.innerText += ' New Text';
// console.log(para.innerText);
const paras = document.querySelectorAll('p');

// paras.forEach((para) =>{
//     console.log(para.innerText)
//     para.innerText += ` new Text`
// })
const content = document.querySelector('.content')
//override
// content.innerHTML = '<h2>This is new Content</h2>'
content.innerHTML += '<h2>This is new Content</h2>'
