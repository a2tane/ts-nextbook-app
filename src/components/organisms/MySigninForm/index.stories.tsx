import { ComponentMeta, ComponentStory } from "@storybook/react";
import MySigninForm from ".";

export default {
  title: "MyOrganisms/MySigninForm",
  argTypes: {
    onSignin: {
      description: "サインインボタンを押したときのイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof MySigninForm>;

const Template: ComponentStory<typeof MySigninForm> = (args) => (
  <MySigninForm {...args} />
);

export const Form = Template.bind({});
