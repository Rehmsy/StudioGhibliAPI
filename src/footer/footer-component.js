export function makeFooter() {
  const html = /*html*/`
  <footer>
    <p>© 2019 Rehmsy</p>
  </footer>
  `;
  
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

const footerContainer = document.getElementById('footer-container');
  
export default function loadFooter() {
  const dom = makeFooter();
  footerContainer.appendChild(dom);
}
