
const body=document.querySelector('body');
const content = document.createElement('div');
const header=document.createElement('header');
const nav=document.createElement('nav');

const ul=document.createElement('ul');



const liHome=document.createElement('li');
const liMenu=document.createElement('li');
const liContact=document.createElement('li');
/*li.addEventListener('click',()=>{
    console.log('clicked');
});*/


nav.append(ul);
const li=document.querySelectorAll('li');
console.log(li);
/*const h2=document.createElement('h2');
=======
const h2=document.createElement('h2');
>>>>>>> origin/main
const img = document.createElement('img');
const div=document.createElement('div');

img.src = '../src/images/pizza.jpeg';
content.id='content';
h2.textContent="Tzuber's pizza";
div.textContent="this is the best pizza there is come join us in ...";*/

header.append(nav);
body.append(header);
/*content.append(h2);
content.append(img);
content.append(div);

body.append(content);*/

