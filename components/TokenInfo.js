export class TokenInfo {
  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = `
    <div>
        <div class="token-info">
            <button class="toggle-btn">❓</button>
        </div>
        <div class="content">
            <p>To use this app, you need a Spotify OAuth token with <strong>user-top-read</strong> scope.</p>
            <ol>
                <li>Go to the <a href="https://developer.spotify.com" target="_blank">Spotify API Console</a>.</li>
                <li>Login with your Spotify account.</li>
                <li>The fastes way is to click "See in action" and copy the value of the const token variable</li>
                <li>Otherwise you can create an app and generate an hour token <a target="_blank" href="https://developer.spotify.com/documentation/web-api/tutorials/getting-started"> here </a> </li>
            </ol>
            <span> Neither I or your browser will store your personal token</span>
        </div>
    </div>
    `;

    const btn = this.container.querySelector('.toggle-btn');
    const content = this.container.querySelector('.content');

    content.style.maxHeight = '0';
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.3s ease, padding 0.3s ease';

    btn.addEventListener('click', () => {
      if (content.style.maxHeight === '0px' || content.style.maxHeight === '0') {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '0px';
      } else {
        content.style.maxHeight = '0';
        content.style.padding = '0';
      }
    });
  }
}
