import { TokenForm } from './components/TokenForm.js';
import { FilterPanel } from './components/FilterPanel.js';
import { TopList } from './components/TopList.js';

const formContainer = document.getElementById('form-container');
const filtersContainer = document.getElementById('filters-container');
const listContainer = document.getElementById('top-list');

const tokenForm = new TokenForm(formContainer);
const filterPanel = new FilterPanel(filtersContainer);
const topList = new TopList(listContainer);

let state = {
  token: '',
  type: 'tracks',
  time: 'long_term',
  limit: 20
};

function updateState(newState) {
  state = { ...state, ...newState };
  if (state.token) {
    topList.load(state);
  }
}

tokenForm.onSubmit(token => updateState({ token }));
filterPanel.onChange(filters => updateState(filters));
