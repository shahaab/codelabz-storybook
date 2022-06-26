import Header from "./Header.js";

export default {
    title: 'Components/6/Header',
    component: Header,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<Header {...args} />)

  Default.args = {
    
  }
