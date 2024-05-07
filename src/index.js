//imports
import './styles.css';
import { content as contentMenu } from "./menu.js";
import { content as contentHome} from "./home.js";
import { content as contentContack } from "./contact.js";

//declerations genral
const body=document.querySelector('body');
const container=document.createElement('container');
const header=document.createElement('header');
const nav=document.createElement('nav');
const ul=document.createElement('ul');

//declerations header
const liHome=document.createElement('li');
const liMenu=document.createElement('li');
const liContact=document.createElement('li');
const coverhome=document.createElement('div');
const covermenu=document.createElement('div');
const covercontact=document.createElement('div');
//header set up

liHome.classList.add('cover');
liMenu.classList.add('cover', 'hidden');
liContact.classList.add('cover', 'hidden');
coverhome.id='coverhome';
covermenu.id="covermenu";
covercontact.id='covercontact';

nav.append(coverhome);
nav.append(covermenu);
nav.append(covercontact);
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
//event listner for li items

li.forEach((item)=>{
    item.addEventListener('click',()=>{
      const precover = document.querySelector('.cover:not(.hidden)');
      precover.classList.add('hidden');
        if(item.id === 'home') {
            contentHome();
            liHome.classList.remove('hidden');

          }
      
          if(item.id === 'menu') {
            contentMenu();
            liMenu.classList.remove('hidden');
          }
      
          if(item.id === 'contact') {
            contentContack();
            liContact.classList.remove('hidden');
          }
        console.log(`clicked ${item.id}`);
   
    });
});

//final setup
header.append(nav);
body.append(header);
body.append(container);
contentHome();

