export class FilterPanel {
  constructor(container) {
    this.container = container;
    this.onChangeCallback = null;
    this.state = { type: 'tracks', time: 'long_term', limit: 20 };
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div id="filters">
        <label>
          Type:
          <select id="filter-type">
            <option value="tracks">Tracks</option>
            <option value="artists">Artists</option>
          </select>
        </label>

        <label>
          Time Range:
          <select id="filter-time">
            <option value="short_term">Last 4 weeks</option>
            <option value="medium_term">Last 6 months</option>
            <option value="long_term" selected>All time</option>
          </select>
        </label>

        <label>
          Limit:
          <select id="filter-limit">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20" selected>20</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>
    `;

    this.container.querySelectorAll('select').forEach(select => {
      select.addEventListener('change', () => {
        this.state = {
          type: this.container.querySelector('#filter-type').value,
          time: this.container.querySelector('#filter-time').value,
          limit: parseInt(this.container.querySelector('#filter-limit').value),
        };
        if (this.onChangeCallback) this.onChangeCallback(this.state);
      });
    });
  }

  onChange(callback) {
    this.onChangeCallback = callback;
  }
}
