import SwitchAccount from "./SwitchAccount";

export default {
  title: 'Components/7/SwitchAccount',
  component: SwitchAccount,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    name: { control: 'text' },
    secondaryMail: { control: 'text' },
  },
};

export const Default = (args) => (<SwitchAccount {...args} />)

Default.args = {
  Heading: 'SwitchAccount',
  name: 'Shahaab Manzar',
  secondaryMail: 'shahaabmanzar@gmail.com',
  avatar: {
    type: "char",
    value: "S",
  },
}