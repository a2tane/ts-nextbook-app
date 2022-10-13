import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyProductForm from ".";

export default {
  title: "MyOrganisms/MyProductForm",
  argTypes: {
    onProductSave: {
      description: "出品ボタンを押したときのイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof MyProductForm>;

const Template: ComponentStory<typeof MyProductForm> = (args) => (
  <MyProductForm {...args} />
);
export const Form = Template.bind({});
