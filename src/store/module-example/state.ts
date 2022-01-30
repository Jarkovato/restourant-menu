import { ProductsStateInterface } from 'components/models';

function state(): ProductsStateInterface {
  return {
    products: [
      {
        id: 1,
        title: 'Суп',
        description: 'Вкусный суп',
        price: 290,
        weight: '400 мл',
        img: '/images/soup-borsch.jpeg',
      },
      {
        id: 2,
        title: 'Паста болоньезе',
        description: 'Вкусная паста с фаршем',
        price: 390,
        weight: '450 гр',
        img: '/images/pasta-bolonieze.jpeg',
      },
      {
        id: 3,
        title: 'Паста грибная',
        description: 'Вкусная паста с грибами',
        price: 340,
        weight: '420 гр',
        img: '/images/pasta-s-gribami.jpeg',
      },
      {
        id: 4,
        title: 'Паста с морепродуктами',
        description: 'Вкусная паста с морепродуктами',
        price: 450,
        weight: '490 гр',
        img: '/images/pasta-s-moreproductami.jpeg',
      },
      {
        id: 5,
        title: 'Чай черный',
        description: 'Индийский чай',
        price: 250,
        weight: '400 мл',
        img: '/images/black-indian-tea.jpeg',
      },
    ],
  };
}

export default state;
