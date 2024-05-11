import { menu as menuitems } from "./info.js";
function content() {
  const body = document.querySelector('body');
  const container=document.querySelector('container');
  const content=document.createElement('div');
  if(document.querySelector('#content')) {
    document.querySelector('#content').remove();
  }
  content.id='content';
  content.className='menu';
  const ul = document.createElement('ul');
  ul.id= 'menu';
  for (let index = 0; index < 10; index++) {
    const li = document.createElement('li');
    li.className='items';
    if(menuitems[index]!==null){
    li.textContent=menuitems[index];}
    ul.append(li);
  }
  const div = document.createElement('div');

  content.append(div);
  content.append(ul);
  container.append(content);
  body.append(container); 

}

export{content}
