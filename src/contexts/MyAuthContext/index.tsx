import React, { useContext } from "react";
import signin from "services/auth/signin";
import signout from "services/auth/signout";
import useSWR from "swr";
import { ApiContext, User } from "types";

type AuthContextType = {
  authUser?: User;
  isLoading: boolean;
  signin: (username: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  mutate: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean
  ) => Promise<User | undefined>;
};

type AuthContextProviderProps = {
  context: ApiContext;
  authUser?: User;
};

const MyAuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
});

export const useMyAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(MyAuthContext);

export const MyAuthContextProvider = ({
  context,
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  const { data, error, mutate } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/me`
  );
  const isLoading = !data && !error;

  const signinInternal = async (username: string, password: string) => {
    await signin(context, { username, password });
    await mutate();
  };

  const signoutInternal = async () => {
    await signout(context);
    await mutate();
  };

  return (
    <MyAuthContext.Provider
      value={{
        authUser: data ?? authUser,
        isLoading,
        signin: signinInternal,
        signout: signoutInternal,
        mutate,
      }}
    >
      {children}
    </MyAuthContext.Provider>
  );
};
