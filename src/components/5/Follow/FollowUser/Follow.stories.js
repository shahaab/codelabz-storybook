import Follow from "./Follow";

export default {
    title: 'Components/5/Follow',
    component: Follow,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<Follow {...args} />)

  Default.args = {
    Heading: 'Follow',
    Content: '',

  }