//other buttons from sarfraz
import NewCodelabzButton from "./NewCodelabzButton.js";

export default {
    title: 'Components/6/Button/NewCodelabzButton',
    component: NewCodelabzButton,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<NewCodelabzButton {...args} />)

  Default.args = {
    
  }
