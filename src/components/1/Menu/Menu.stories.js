import Menu from "./Menu";

export default {
    title: 'Components/1/Menu',
    component: Menu,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<Menu {...args} />)

  Default.args = {
    Heading: 'Menu',
    Content: '',

  }