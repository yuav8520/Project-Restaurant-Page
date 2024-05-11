import { staff } from "./info";

function content() {
  const body = document.querySelector('body');
  const container=document.querySelector('container');
  const content=document.createElement('div');
  if(document.querySelector('#content')) {
    document.querySelector('#content').remove();
  }
  content.id='content';
  const contactsign = document.createElement('h1');
  const ul = document.createElement('ul');
staff.forEach(member => {
const memberli = document.createElement('li');
const name=document.createElement('h3');
const details=document.createElement('p');
const rolename=document.createElement('div');
const phone=document.createElement('div');
const email=document.createElement('div');

name.textContent=member.name;
rolename.textContent=member.role;
phone.textContent="Phone: "+member.phone;
email.textContent="Email: "+member.email;

details.append(rolename);
details.append(phone);
details.append(email);
memberli.append(name);
memberli.append(details);
ul.append(memberli);
})
 content.append(ul);
  container.append(content)
  body.append(container); 

}
export{content}