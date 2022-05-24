class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
        <div class="app-bar-container" id="app-bar-container">
            <div class="app-bar-logo">
                <span>Restaurant Apps</span>
            </div>
            <div class="app-bar-menu" id="app-bar-menu">
                <a href="/">Home</a>
                <a href="#/favorite">Favorite</a>
                <a href="https://github.com/wimpoge">About Me</a>
            </div>
            <div class="topnav" id="myTopnav">
                <a href="javascript:void(0);" class="icon" onclick="myFunction()" aria-label="Menu">☰</a>
                <a href="/">Home</a>
                <a href="#">Favorite</a>
                <a href="https://github.com/wimpoge">About Us</a>
               
            </div>
        </div>
    </nav>
        `;
  } 
}

customElements.define('app-bar', AppBar);