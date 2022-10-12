import { ComponentMeta } from "@storybook/react";
import Button from "components/atoms/Button";
import MyGlobalSpinnerContextProvider, {
  useMyGlobalSpinnerActionsContext,
} from "contexts/MyGlobalSpinnerContext";
import MyGlobalSpinner from ".";

export default {
  title: "MyOrganisms/MyGlobalSpinner",
} as ComponentMeta<typeof MyGlobalSpinner>;

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useMyGlobalSpinnerActionsContext();
    const handleClick = () => {
      setGlobalSpinner(true);
      setTimeout(() => {
        setGlobalSpinner(false);
      }, 5000);
    };

    return (
      <>
        <MyGlobalSpinner />
        <Button onClick={handleClick}>スピナー表示</Button>
      </>
    );
  };

  return (
    <MyGlobalSpinnerContextProvider>
      <ChildComponent />
    </MyGlobalSpinnerContextProvider>
  );
};
