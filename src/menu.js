function content() {
    const body = document.querySelector('body');
    const text = document.createElement('div');
    const div = document.createElement('div');
    text.textContent = 'This is the best pizza there is come join us in...';
    div.textContent = 'This is spossed to be a menu page';
  body.append(text);
  body.append(div);
  }
  export{content}