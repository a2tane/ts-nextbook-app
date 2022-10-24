import { RenderResult } from "@testing-library/react";
import { AuthContextProvider } from "contexts/AuthContext";
import { ShoppingCartContextProvider, useShoppingCartContext, useShoppingCartContext } from "contexts/ShoppingCartContext";
import { ThemeProvider } from "styled-components";
import { Product, User } from "types";
import Header from ".";

jest.mock("contexts/shoppingCartContext");

const authUser: User = {
  id: 1,
  username: "dummy",
  displayName: 'aa',
  email: '',
  profileImageUrl: '',
  description: '',
}

const product: Product = {
    id: 0,
    category: "shoes",
    title: "",
    description: "",
    imageUrl: "",
    blurDataUrl: "",
    price: 0,
    condition: "used",
    owner: {
        id: 0,
        username: "",
        displayName: "",
        email: "",
        profileImageUrl: "",
        description: ""
    }
}

describe('Header', () => {
    let renderResult: RenderResult
    const useShoppingCartContext = useShoppingCartContext as jest.MockedFunction<typeof useShoppingCartContext>

    it('', async () => {
        useShoppingCartContextMock.mockReturnValue({
            cart: [product],
            addProductToCart: () => {},
            removeProductFromCart: () => {

            }
        })

        renderResult = render(
            <ThemeProvider theme={theme}>
                <ShoppingCartContextProvider>
                    <SuthContextProvider authUser={authUser} context={}>
                        <Header></Header>
                    </SuthContextProvider>
                </ShoppingCartContextProvider>
            </ThemeProvider>
        )

        expoect(screen.getAllByTestId('badge-wrappr').length).toBeGreaterThan(0)

        renderResult.unmount()
        useShoppingCartContextMock.mockRest()
    })

    it('未サインイン', async()=> {
        useShoppingCartContextMock.mockReturnValue({

        })

        renderResutl = render(
            ThemeProvider
            ShoppingCartContextProvider
            AuthContextProvider
        )

        expect(screen.queryByTestId('profile-shape-image')).toBeNull()
        expoect(screen.queryByTestId('badge-wrapper')).toBeNull
        
    })

})