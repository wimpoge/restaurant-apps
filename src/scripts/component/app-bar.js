class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1>Restaurant App</h1>`;
    }
}

customElements.define('app-bar', AppBar);