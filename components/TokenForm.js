import { TokenInfo } from './TokenInfo.js';

export class TokenForm {
  constructor(container) {
    this.container = container;
    this.onSubmitCallback = null;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <form id="token-form" class="token-form">
        <div class="input-wrapper">
          <input type="text" id="input-token" placeholder="Enter Spotify token" />
          <div class="info-wrapper"></div>
        </div>
        <button type="submit">Search</button>
      </form>
    `;

    const infoWrapper = this.container.querySelector('.info-wrapper');
    this.tokenInfo = new TokenInfo(infoWrapper);

    const form = this.container.querySelector('form');
    const input = this.container.querySelector('#input-token');

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (this.onSubmitCallback) this.onSubmitCallback(input.value.trim());
    });
  }

  onSubmit(callback) {
    this.onSubmitCallback = callback;
  }
}
