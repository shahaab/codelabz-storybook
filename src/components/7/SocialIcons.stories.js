import SocialIcons from "./SocialIcons";

export default {
    title: 'Components/7/SocialIcons',
    component: SocialIcons,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<SocialIcons {...args} />)

  Default.args = {
    Heading: 'SocialIcons',
    Content: '',

  }