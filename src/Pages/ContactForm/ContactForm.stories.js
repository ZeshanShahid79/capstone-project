import ContactForm from './ContactForm.js';

export default {
  title: 'components/ContactForm/ContactForm',
  component: ContactForm,
  argTypes: {},
};

const Template = args => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  restaurantName: 'Zeshan',
};
