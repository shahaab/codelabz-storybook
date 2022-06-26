import FollowUser from "./FollowUser";

export default {
    title: 'Components/5/FollowUser',
    component: FollowUser,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
      Heading: '',
    },
  };

  export const Default = (args) => (<FollowUser {...args} />)

  Default.args = {
    Heading: 'Who to Follow',
    Content: '',

  }

  export const Contributors = (args) => (<FollowUser {...args} />)
  Contributors.args = {
    Heading: 'Contributors',
    Content: '',
  }