// const content = document.querySelector('p');

// console.log(content.classList)

// content.classList.add('success')
// console.log(content.classList)

// content.classList.remove('error');
// console.log(content.classList)

const paras = document.querySelectorAll("p");

paras.forEach((para) =>{
    // console.log(para.innerText )
    // console.log(para.textContent )
    // console.log(para.innerHTML )
    if (para.textContent.includes('error')){
        para.classList.add('error')
    }
    if (para.textContent.includes('success')){
        para.classList.add('success')
    }
    
})