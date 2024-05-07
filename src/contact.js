function content() {
  const body = document.querySelector('body');
  const container=document.querySelector('container');
  const content=document.createElement('div');
  if(document.querySelector('#content')) {
    document.querySelector('#content').remove();
  }
  content.id='content';
  const text = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');
  img.src = '../src/images/pizza.jpeg';
  text.textContent = 'This is the best pizza there is come join us in...';
  div.textContent = 'This is spossed to be a contact page';
  content.append(text);
  content.append(img);
  content.append(div);
  container.append(content)
  body.append(container); 

}
export{content}