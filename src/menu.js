import { text } from "./itemenu.js";
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
  for (let index = 0; index < 10; index++) {
    const li = document.createElement('li');
    li.className='items';
    if(text[index]!==null){
    li.textContent=text[index];}
    ul.append(li);
  }
  const div = document.createElement('div');
  

  div.textContent = 'This is spossed to be a menu page';

  content.append(div);
  content.append(ul);
  container.append(content);
  body.append(container); 

}

export{content}
