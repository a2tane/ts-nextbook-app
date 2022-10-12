import { ComponentMeta } from "@storybook/react";
import MyHeader from "components/organisms/MyHeader";
import { MyAuthContextProvider } from "contexts/MyAuthContext";
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from "contexts/MyShoppingCartContext";
import { useEffect } from "react";

export default {
  title: "MyOrganisms/MyHeader",
} as ComponentMeta<typeof MyHeader>;

export const NoLogin = () => <MyHeader />;

export const Login = () => {
  const authUser = {
    id: 1,
    username: "dummy",
    displayName: "Taketo Yoshida",
    email: "test@example.com",
    profileImageUrl: "/image/smaple/1.jpg",
    description: "",
  };

  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext();

    useEffect(() => {
      addProductToCart({
        id: 1,
        category: "book",
        title: "Product",
        description: "",
        imageUrl: "/images/sample/1.jpg",
        blurDataUrl: "",
        price: 1000,
        condition: "used",
        owner: authUser,
      });
    }, []);

    return <MyHeader />;
  };

  return (
    <ShoppingCartContextProvider>
      <MyAuthContextProvider
        context={{
          apiRootUrl: " apiRootUrl: 'https://dummy",
        }}
        authUser={authUser}
      >
        <ChildComponent />
      </MyAuthContextProvider>
    </ShoppingCartContextProvider>
  );
};
