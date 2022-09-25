export const title = "Welcome to my page";
export const metas = {
  title: "Hello world",
  description: "My first post",
  image: "convergent-logo.png",
};
export const links = [
  {
    text: "My Twitter",
    url: "https://twitter.com/misteroom",
  },
  {
    text: "My GitHub profile",
    url: "https://github.com/oscarotero",
  },
];

export default function ({ title, links }) {
  return `
  <article>
    <header>
      <h1>${title}</h1>
    </header>

    <ul>
      ${
    links
      .map((link) => `<li><a href="${link.url}">${link.text}</a></li>`)
      .join("")
  }
    </ul>
  </article>`;
}
