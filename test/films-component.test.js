const test = QUnit.test;
QUnit.module('films component');

function makeFilmItem() {
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

test('make film template', assert => {
  const film = {
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    title: "Grave of the Fireflies",
    description: "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    director: "Isao Takahata",
    produce: "Toru Hara",
    release_date: "1988",
    rt_score: "97"
  };

  const dom = makeFilmItem(film);

  assert.htmlEqual(dom, /*html*/`
    <li class="film" title="In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.">
      <h1>
        <a href="./film-detail.html?id=12cfb892-aac0-4c5b-94af-521852e46d6a">Grave of the Fireflies</a>
      </h1>
    </li>  
      `);
});
