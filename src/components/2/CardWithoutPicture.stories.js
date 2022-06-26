import CardWithoutPicture from "./CardWithoutPicture";

export default {
    title: 'Components/2/CardWithoutPicture',
    component: CardWithoutPicture,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<CardWithoutPicture {...args} />)

  Default.args = {
    Heading: 'CardWithoutPicture',
    Content: '',

  }