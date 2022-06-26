import FillUserProfile from "./FillUserProfile";

export default {
    title: 'Components/7/FillUserProfile',
    component: FillUserProfile,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<FillUserProfile {...args} />)

  Default.args = {
    Heading: 'FillUserProfile',
    Content: '',

  }