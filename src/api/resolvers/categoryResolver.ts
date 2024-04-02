import {Species} from '../../types/DBTypes';

const categoryData = [
  {
    id: '1',
    category_name: 'Mammal',
  },
];

export default {
  Species: {
    category: (parent: Species) => {
      console.log(parent);
      return categoryData.find(
        (category) => category.id === String(parent.category),
      );
    },
  },
};
