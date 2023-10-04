const template = document.createElement('template')
template.innerHTML = `<h1>This is a webcomponent</h1>`

class WebComponent extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: "open"})
    shadow.append(template.content.cloneNode(true))
  }
  connectedCallback (){
    // vuurt af wanneer het element aan de DOM is vastgemaakt
  }
  disconnectedCallback() {
    // vuurt af wanneer het element uit de DOM wordt gehaald
  }
  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    // wordt aangeroepen wanneer geobserveerde waardes veranderen
    console.log(`${name} has changed from ${oldValue} to ${newValue}`)
  }

  static get observedAttributes() {
    // array van strings met attributes die je wilt oberserveren
    // <web-components title="een titel"></web-components>
    // ['title']
    return [];
  }
}

customElements.define('web-component', WebComponent)