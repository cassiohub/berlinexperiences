import experiences from '../data/experiences.json';

const ExperienceService = {
  list: (params) => {
    const lastIndex = params && params.limit ? params.limit + 1 : experiences.tours.length;
    return experiences.tours.slice(0, lastIndex);
  },

  get: ({ id }) => {
    const item = experiences.tours.filter(e => e.id === id);
    return item.length ? item.pop() : null;
  },

  search: ({ term }) => {
    return experiences.tours.filter(e => e.title.toLowerCase().includes(term.toLowerCase()));
  },

};

export default ExperienceService;