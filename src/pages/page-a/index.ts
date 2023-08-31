export function initPageA(params) {
  const div = document.createElement("div");

  div.innerHTML = `
  <h1>Página A</h1>
`;

  div.addEventListener("click", () => {
    params.goTo("/b");
  });

  return div;
}
