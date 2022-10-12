import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyCartProduct from ".";

export default {
  title: "MyOrganisms/MyCartProduct",
  argTypes: {
    id: {
      control: { type: "number" },
      description: "商品ID",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    title: {
      control: { type: "text" },
      description: "商品タイトル",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    price: {
      control: { type: "number" },
      description: "商品価格",
      table: {
        type: { summary: "number" },
      },
    },
    onBuyButtonClick: {
      description: "購入ボタンを押したときのイベントハンドラ",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    onRemoveButtonClick: {
      description: "削除ボタン押下時のイベントハンドラ",
      table: {
        type: {
          summary: "function",
        },
      },
    },
  },
} as ComponentMeta<typeof MyCartProduct>;

const Template: ComponentStory<typeof MyCartProduct> = (args) => {
  return <MyCartProduct {...args}></MyCartProduct>;
};

export const NiceShoes = Template.bind({});
NiceShoes.args = {
  id: 1,
  imageUrl: "/images/sample/1.jpg",
  title: "ナイスシューズ",
  price: 3200,
};
