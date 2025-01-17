import Box from "components/layout/Box";
import InputImages, { FileData } from "components/molecules/InputImages";
import { Controller, useForm } from "react-hook-form";
import { Category, Condition } from "types";
import Text from "components/atoms/Text";
import { fontWeight } from "@mui/system";
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";
import Dropdown from "components/molecules/Dropdown";
import Button from "components/atoms/Button";

export type ProductFormData = {
  image: FileData[];
  title: string;
  description: string;
  category: Category;
  condition: Condition;
  price: string;
};

interface ProductFormProps {
  onProductSave?: (data: ProductFormData) => void;
}

const MyProductForm = ({ onProductSave }: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>();
  const onSubmit = (data: ProductFormData) => {
    onProductSave && onProductSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={3}>
        <Box marginBottom={3}>
          <Text as={"label"} variant="mediumLarge" fontWeight="bold">
            商品の写真
          </Text>
        </Box>
        <Controller
          control={control}
          name={"image"}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputImages
              images={value ?? []}
              onChange={onChange}
              maximumNumber={1}
              hasError={!!error}
            ></InputImages>
          )}
        ></Controller>
        {errors.image && (
          <Text color={"danger"} variant="small" paddingLeft={1}>
            Product image is required
          </Text>
        )}
      </Box>
      <Box marginBottom={3}>
        <Box marginBottom={3}>
          <Text as={"label"} variant={"mediumLarge"} fontWeight={"bold"}>
            商品情報
          </Text>
        </Box>
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            タイトル
          </Text>
          <Input
            {...register("title", { required: true })}
            name={"title"}
            type="textr"
            placeholder="商品のタイトル"
            hasError={!!errors.title}
          />
          {errors.title && (
            <Text color="danger" variant="small" paddingLeft={1}>
              タイトルの入力は必須です
            </Text>
          )}
        </Box>
        <Box marginBottom={1}>
          <Text as={"label"} variant="medium">
            概要
          </Text>
          <Controller
            control={control}
            name={"description"}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextArea
                placeholder="最高の商品です！"
                hasError={!!error}
                onChange={onChange}
              >
                {value}
              </TextArea>
            )}
          />
          {errors.description && (
            <Text color="danger" variant="small" paddingLeft={1}>
              概要の入力は必須です
            </Text>
          )}
        </Box>
        <Box marginBottom={1}>
          <Text as={"label"} variant={"medium"}>
            カテゴリ
          </Text>
          <Controller
            control={control}
            name="category"
            rules={{ required: true }}
            defaultValue="shoes"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: "shoes", label: "シューズ" },
                  { value: "clothes", label: "トップス" },
                  { value: "book", label: "本" },
                ]}
                hasError={!!error}
                value={value}
                placeholder="カテゴリを選択してください"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.category && (
            <Text color={"danger"} variant="small" paddingLeft={1}>
              カテゴリの選択は必須です
            </Text>
          )}
        </Box>
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            商品の状態
          </Text>
          <Controller
            control={control}
            name="condition"
            rules={{ required: true }}
            defaultValue="used"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: "used", label: "中古" },
                  { value: "new", label: "新品" },
                ]}
                hasError={!!error}
                value={value ?? "used"}
                placeholder="Please select conditon"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.condition && (
            <Text color="danger" variant="small" paddingLeft={1}>
              商品の状態の入力は必須です
            </Text>
          )}
        </Box>
        <Box>
          <Text as={"label"} variant="medium">
            価格（円）
          </Text>
          <Input
            {...register("price", { required: true })}
            name="price"
            type="number"
            placeholder="100"
            hasError={!!errors.price}
          />
          {errors.price && (
            <Text color={"danger"} variant="small" paddingLeft={1}>
              価格の入力は必須です
            </Text>
          )}
        </Box>
      </Box>
      <Button width={"100%"} type={"submit"}>
        出品
      </Button>
    </form>
  );
};

export default MyProductForm;
