import ContactForm from './ContactForm.js';

export default {
  title: 'components/ContactForm/ContactForm',
  component: ContactForm,
};

const Template = args => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
