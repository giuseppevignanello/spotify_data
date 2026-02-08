export class TopList {
  constructor(container) {
    this.container = container;
  }

  async load({ token, type, time, limit }) {
    if (!token) return;
    this.container.innerHTML = '';

    const data = await this.fetchTop(token, type, time, limit);

    data.reverse().forEach(item => {
      const li = document.createElement('li');
      li.onclick = () => window.open(item.external_urls.spotify, '_blank');

      let img = '';
      let name = '';
      let extra = '';

      if (type === 'tracks') {
        img = item.album.images[0]?.url || '';
        name = item.name;
        extra = `Album: ${item.album.name} • Duration: ${Math.floor(item.duration_ms/60000)}:${String(Math.floor((item.duration_ms%60000)/1000)).padStart(2,'0')}`;
        const artists = item.artists.map(a => a.name).join(', ');
        li.innerHTML = `<img src="${img}" /><div class="track-info"><span class="name">${name}</span><span class="artists">${artists}</span><span class="extra">${extra}</span></div>`;
      } else if (type === 'artists') {
        img = item.images[0]?.url || '';
        name = item.name;
        extra = `Followers: ${item.followers.total.toLocaleString()}`;
        li.innerHTML = `<img src="${img}" /><div class="track-info"><span class="name">${name}</span><span class="extra">${extra}</span></div>`;
      }

      this.container.appendChild(li);
    });
  }

  async fetchTop(token, type, time, limit) {
    const endpoint = `v1/me/top/${type}?time_range=${time}&limit=${limit}`;
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    return json.items || [];
  }
}
