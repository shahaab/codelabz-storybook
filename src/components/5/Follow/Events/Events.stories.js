import Events from "./Events";

export default {
    title: 'Components/5/Events',
    component: Events,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<Events {...args} />)

  Default.args = {
    Heading: 'Events',
    Content: '',

  }