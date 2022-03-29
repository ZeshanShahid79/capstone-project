import RestaurantCard from './RestaurantCard.js';

export default {
  title: 'components/RestaurantCard',
  component: RestaurantCard,
};

const Template = args => <RestaurantCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
