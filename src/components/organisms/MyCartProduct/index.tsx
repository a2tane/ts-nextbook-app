import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Text from "components/atoms/Text";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Button from "components/atoms/Button";

const RemoveText = styled(Text)`
  curosor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface CartProductProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  onBuyButtonClick?: (id: number) => void;
  onRemoveButtonClick?: (id: number) => void;
}

const MyCardProduct = ({
  id,
  imageUrl,
  title,
  price,
  onBuyButtonClick,
  onRemoveButtonClick,
}: CartProductProps) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Flex>
        <Box width="120px" height="120px">
          <Link href={`/products/${id}`} passHref>
            <a>
              <Image
                quality="85"
                src={imageUrl}
                alt={title}
                width={120}
                height={120}
                objectFit="cover"
              />
            </a>
          </Link>
        </Box>
        <Box padding={1}>
          <Flex
            height={"100%"}
            flexDirection="column"
            justifyContent={"space-between"}
          >
            <Box>
              <Text
                fontWeight={"bold"}
                variant={"mediumLarge"}
                marginTop={0}
                marginBottom={1}
                as="p"
              >
                {title}
              </Text>
              <Text margin={0} as="p">
                {price}円
              </Text>
            </Box>
            <Flex marginTop={{ base: 2, md: 0 }}>
              <Button
                width={{ base: "100px", md: "200px" }}
                onClick={() => onBuyButtonClick && onBuyButtonClick(id)}
              >
                購入
              </Button>
              <Button
                marginLeft={1}
                width={{ base: "100px", md: "200px" }}
                display={{ base: "block", md: "none" }}
                variant="danger"
                onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
              >
                削除
              </Button>
            </Flex>
          </Flex>
          <Box display={{ base: "none", md: "block" }}>
            <RemoveText
              color="danger"
              onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
            >
              カートから削除
            </RemoveText>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default MyCardProduct;
