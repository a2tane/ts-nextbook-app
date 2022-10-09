import { useEffect } from "@storybook/addons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";
import Dropzone from "../Dropzone";
import MyImagePreview from "../MyImagePreview";

export default {
  title: "Molecules/MyImagePreview",
  argTypes: {
    src: {
      control: { type: "text" },
      description: "image url",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      control: { type: "text" },
      description: "代替テキスト",
      table: {
        type: { summary: "string" },
      },
    },
    height: {
      control: { type: "number" },
      description: "縦幅",
      table: {
        type: { summary: "number" },
      },
    },
    width: {
      control: { type: "number" },
      description: "横幅",
      table: {
        type: { summary: "number" },
      },
    },
    onRemove: {
      description: "削除ボタン押下時のイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof MyImagePreview>;

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;
interface Image {
  file?: File;
  src?: string;
}

const Template: ComponentStory<typeof MyImagePreview> = (args) => {
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const newImages = [...images];
    for (const f of files) {
      const index = newImages.findIndex((img: Image) => {
        if (index === -1) {
          newImages.push({
            file: f,
            src: URL.createObjectURL(f),
          });
        }
      });
    }
    setImages(newImages);
  }, [files]);

  const handleRemove = (src: string) => {
    const image = images.find((img: Image) => img.src === src);
    if (image !== undefined) {
      setImages((images) => images.filter((img) => img.src !== image.src));
      setFiles((files) => files.filter((file: File) => file !== image.file));
    }
    args && args.onRemove && args.onRemove(src);
  };

  return (
    <Container>
      <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
      {images.map((image, i) => (
        <MyImagePreview
          key={i}
          src={image.src}
          {...args}
          onRemove={handleRemove}
        />
      ))}
    </Container>
  );
};

export const MyWithDropzone = Template.bind({});
MyWithDropzone.args = {};
