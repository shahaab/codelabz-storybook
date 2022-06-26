import Footer from "./Footer";

export default {
    title: 'Components/1/Footer',
    component: Footer,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<Footer {...args} />)

  Default.args = {
    Heading: 'Footer',
    Content: '',

  }