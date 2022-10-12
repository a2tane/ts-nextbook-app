import { useAuthContext } from "contexts/AuthContext";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";
import styled from "styled-components";
import Text from "components/atoms/Text";
import Flex from "components/layout/Flex";
import Link from "next/link";
import AppLogo from "components/atoms/AppLogo";
import Box from "components/layout/Box";
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "components/atoms/IconButton";
import BadgeIconButton from "components/molecules/BadgeIconButton";
import ShapeImage from "components/atoms/ShapeImage";
import Spinner from "components/atoms/Spinner";

const HeaderRoot = styled.header`
  height: 88px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Nav = styled(Flex)`
  & > span:not(:first-child) {
  }
`;

const NavLink = styled.span`
  display: inline;
`;

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MyHeader = () => {
  const { cart } = useShoppingCartContext();
  const { authUser, isLoading } = useAuthContext();

  return (
    <HeaderRoot>
      <Flex paddingLeft={3} paddingRight={3} justifyContent={"space-between"}>
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Link href="/" passHref>
              <Anchor as="a">
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search" passHref>
                <Anchor as="a">すべて</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/clothes" passHref>
                <Anchor as="a">トップス</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/book" passHref>
                <Anchor as="a">本</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/shoes" passHref>
                <Anchor as="a">シューズ</Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>
        <Nav as="nav" height="56px" alignItems={"center"}>
          <NavLink>
            <Box display={{ base: "block", md: "none" }}>
              <Link href="/search" passHref>
                <Anchor as="a">
                  <SearchIcon />
                </Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Link href="/cart" passHref>
              <Anchor as="a">
                <BadgeIconButton
                  icon={<ShoppingCartIcon size={24} />}
                  size="24px"
                  badgeContent={cart.length === 0 ? undefined : cart.length}
                  badgeBackgroundColor="primary"
                />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            {(() => {
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`} passHref>
                    <Anchor as="a">
                      <ShapeImage
                        shape="circle"
                        src={authUser.profileImageUrl}
                        width={24}
                        height={24}
                        data-testid="profile-shape-image"
                      />
                    </Anchor>
                  </Link>
                );
              } else if (isLoading) {
                return <Spinner size={20} strokeWidth={2} />;
              } else {
                return (
                  <Link href="/signin" passHref>
                    <Anchor as="a">
                      <PersonIcon size={24} />
                    </Anchor>
                  </Link>
                );
              }
            })()}
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default MyHeader;
