import FormInput from './FormInput';

export default {
  title: 'components/FormInput/FormInput',
  component: FormInput,
  argTypes: {},
};

const Template = args => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Restaurantname',
  value: 'Maze Maze',
};
