import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyProductCard from ".";

export default {
  title: "MyOrganisms/MyProductCard",
  argTypes: {
    title: {
      control: { type: "text" },
      description: "商品名",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: { type: "number" },
      description: "商品価格",
      table: {
        type: { summary: "number" },
      },
    },
    imageUrl: {
      control: { type: "text" },
      description: "商品画像URL",
      table: {
        type: { summary: "number" },
      },
    },
    blurDataUrl: {
      control: { type: "text" },
      description: "商品のぼかし画像のデータURIすきーむ",
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      options: ["listing", "small", "detail"],
      control: {
        type: "radio",
      },
      defaultValue: "listing",
      description: "ばりあんと",
      table: {
        type: {
          summary: "listing | small | detail",
        },
        defaultValue: { summary: "primary" },
      },
    },
  },
} as ComponentMeta<typeof MyProductCard>;

const Template: ComponentStory<typeof MyProductCard> = (args) => (
  <MyProductCard {...args}></MyProductCard>
);

export const Listing = Template.bind({});
Listing.args = {
  variant: "listing",
  title: "ナイスシューズ",
  imageUrl: "/images/sample/1.jpg",
  price: 2000,
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  title: "ナイスシューズ",
  imageUrl: "/images/sample/1.jpg",
  price: 2000,
};
export const Detail = Template.bind({});
Detail.args = {
  variant: "detail",
  title: "ナイスシューズ",
  imageUrl: "/images/sample/1.jpg",
  price: 2000,
};
