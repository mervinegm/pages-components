export function initMervEl() {
  class MervEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.innerHTML = `
              <h3>Merv Element</h3>
          `;

      shadow.appendChild(div);
    }
  }

  customElements.define("merv-el", MervEl);
}
