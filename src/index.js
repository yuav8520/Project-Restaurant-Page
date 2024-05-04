import './styles.css';
import { content as contentMenu } from "./menu.js";
import { content as contentHome} from "./home.js";
import { content as contentContack } from "./contact.js";
const body=document.querySelector('body');
const content = document.createElement('div');
const header=document.createElement('header');
const nav=document.createElement('nav');
const ul=document.createElement('ul');

const liHome=document.createElement('li');
const liMenu=document.createElement('li');
const liContact=document.createElement('li');
ul.append(liHome);
ul.append(liMenu);
ul.append(liContact);
liHome.id='home';
liMenu.id='menu';
liContact.id='contact';
liHome.textContent='Home';
liMenu.textContent='Menu';
liContact.textContent='Contact';
nav.append(ul);
const li=ul.querySelectorAll('li');
li.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.id === 'home') {
            contentHome();
          }
      
          if(item.id === 'menu') {
            contentMenu();
          }
      
          if(item.id === 'contact') {
            contentContack();
          }
        console.log(`clicked ${item.id}`);

    });
});

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

