import RestaurantCard from './RestaurantCard.js';

export default {
  title: 'components/RestaurantCard/RestaurantCard',
  component: RestaurantCard,
  argTypes: {},
};

const Template = args => <RestaurantCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  randomRestaurant: {
    restaurant: 'Burger King',
    address: 'Grandweg 154',
    description: 'Fastfood chain ...',
    url: 'https://www.burgerking.de/',
  },
};
