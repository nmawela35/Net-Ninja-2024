const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "www.yahoo.com");
link.innerText = "Go to yahoo.com";
console.log(link);

const msg = document.querySelector('p');
msg.setAttribute('class', 'success');
msg.setAttribute('class', 'failure');
msg.setAttribute('style', 'color:blue');

