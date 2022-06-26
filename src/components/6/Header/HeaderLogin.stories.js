import HeaderLoggedIN from "./HeaderLogin.js";

export default {
    title: 'Components/6/HeaderLoggedIN',
    component: HeaderLoggedIN,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<HeaderLoggedIN {...args} />)

  Default.args = {
    
  }
