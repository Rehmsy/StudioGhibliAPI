export function makeHeader() {
  const html = /*html*/`
    <header>
      <img src="assets/ghibli-films.jpg" class="logo" alt="Unofficial Studio Ghibli Logo with Girl on Broom">
      <h1>Studio Ghibli Films</h1>
      <nav>
        <a href="./">All Films</a>
      </nav>
    </header>
  `;

  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader() {
  const dom = makeHeader();
  headerContainer.appendChild(dom);
}
