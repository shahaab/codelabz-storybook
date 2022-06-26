import FollowOrgs from "./FollowOrgs";

export default {
    title: 'Components/5/FollowOrgs',
    component: FollowOrgs,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<FollowOrgs {...args} />)

  Default.args = {
    Heading: 'FollowOrgs',
    Content: '',

  }