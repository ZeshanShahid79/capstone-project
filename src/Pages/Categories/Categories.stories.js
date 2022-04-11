import Categories from './Categories';

export default {
  title: 'components/Pages/Categories',
  component: Categories,
  argTypes: {},
};

const Template = args => <Categories {...args} />;

export const Default = Template.bind({});
Default.args = {};
