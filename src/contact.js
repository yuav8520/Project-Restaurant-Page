function content() {
  const body = document.querySelector('body');
  const text = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');
  text.textContent = 'This is the best pizza there is come join us in...';
  div.textContent = 'This is spossed to be a contact page';
  body.append(text);
  body.append(div);

}