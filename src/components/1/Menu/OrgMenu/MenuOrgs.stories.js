import MenuOrg from "./MenuOrg";

export default {
    title: 'Components/1/MenuOrg',
    component: MenuOrg,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<MenuOrg {...args} />)

  Default.args = {
    Heading: 'MenuOrg',
    Content: '',

  }