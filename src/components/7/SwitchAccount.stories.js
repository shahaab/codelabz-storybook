import SwitchAccount from "./SwitchAccount";

export default {
    title: 'Components/7/SwitchAccount',
    component: SwitchAccount,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<SwitchAccount {...args} />)

  Default.args = {
    Heading: 'SwitchAccount',
    Content: '',

  }