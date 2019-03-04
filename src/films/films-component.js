export function makeFilmItem() {
  const html = /*html*/`
    <li class="film" title="In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.">
      <h1>
        <a href="./film-detail.html?id=12cfb892-aac0-4c5b-94af-521852e46d6a">Grave of the Fireflies</a>
      </h1>
    </li>
  `;

  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}


