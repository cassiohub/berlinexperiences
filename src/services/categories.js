import categories from '../data/categories.json';

const CategoryService = {
  list: () => {
    return categories;
  },

  get: ({ id }) => {
    const item = categories.filter(e => e.id === id);
    return item.length ? item.pop() : null;
  },

};

export default CategoryService;