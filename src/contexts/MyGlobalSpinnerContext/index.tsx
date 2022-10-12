import React, { createContext, useContext, useState } from "react";

const GlobalSpinnerContext = createContext<boolean>(false);
const GlobalSpinnerActionContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

export const useMyGlobalSpinnerContext = (): boolean =>
  useContext<boolean>(GlobalSpinnerContext);

export const useMyGlobalSpinnerActionsContext = (): React.Dispatch<
  React.SetStateAction<boolean>
> =>
  useContext<React.Dispatch<React.SetStateAction<boolean>>>(
    GlobalSpinnerActionContext
  );

interface GlobalSpinnerContextProviderProps {
  children?: React.ReactNode;
}

const MyGlobalSpinnerContextProvider = ({
  children,
}: GlobalSpinnerContextProviderProps) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false);

  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionContext.Provider value={setGlobalSpinner}>
        {children}
      </GlobalSpinnerActionContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

export default MyGlobalSpinnerContextProvider;
