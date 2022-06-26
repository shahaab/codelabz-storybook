import CardWithPicture from "./CardWithPicture";

export default {
    title: 'Components/2/CardWithPicture',
    component: CardWithPicture,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<CardWithPicture {...args} />)

  Default.args = {
    Heading: 'CardWithPicture',
    Content: '',

  }