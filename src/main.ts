const template = document.createElement('template')
template.innerHTML = `<h1>This is a webcomponent</h1>`

class WebComponent extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: "open"})
    shadow.append(template.content.cloneNode(true))
  }

}

customElements.define('web-component', WebComponent)