import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyUserProfile from ".";

export default {
  title: "MyOrganisms/MyUserProfile",
  argTypes: {
    variant: {
      options: ["normal", "small"],
      control: { type: "radio" },
      defaultValue: "normal",
      description: "バリアント",
      table: {
        type: {
          summary: "normal | small",
        },
        defaultValue: { summary: "normal" },
      },
    },
    username: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof MyUserProfile>;

const Template: ComponentStory<typeof MyUserProfile> = (args) => (
  <MyUserProfile {...args} />
);

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  username: "テストユーザー",
  profileImageUrl: "/images/sample/1.jpg",
  numberOfProducts: 2000,
  description: "サンプルテキスト",
};

export const Normal = Template.bind({});
Normal.args = {
  variant: "normal",
  username: "テストユーザー",
  profileImageUrl: "/images/sample/1.jpg",
  numberOfProducts: 2000,
  description: "サンプルテキスト",
};
