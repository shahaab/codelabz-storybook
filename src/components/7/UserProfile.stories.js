import UserProfile from "./UserProfile";

export default {
    title: 'Components/7/UserProfile',
    component: UserProfile,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<UserProfile {...args} />)

  Default.args = {
    Heading: 'UserProfile',
    Content: '',

  }