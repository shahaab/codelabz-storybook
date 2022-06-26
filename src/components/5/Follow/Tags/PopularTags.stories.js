import PopularTags from "./PopularTags";

export default {
    title: 'Components/5/PopularTags',
    component: PopularTags,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'},
    },
  };

  export const Default = (args) => (<PopularTags {...args} />)

  Default.args = {
    Heading: 'Popular Tags',
    Content: '',

  }