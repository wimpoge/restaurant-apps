class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <div>
                <span>Copyright © 2022 - Restaurant Apps</span>
            </div>
        </footer>
        `;
  }
}

customElements.define('the-footer', Footer);
export default Footer;