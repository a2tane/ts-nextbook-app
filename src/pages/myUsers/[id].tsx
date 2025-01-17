import BreadcrumbItem from "components/atoms/BreadcrumbItem";
import Separator from "components/atoms/Separator";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Breadcrumb from "components/molecules/Breadcrumb";
import Layout from "components/templates/Layout";
import UserProductCardListContainer from "containers/UserProductCardListContainer";
import UserProfileContainer from "containers/UserProfileContainer";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import getAllProducts from "services/products/get-all-products";
import getAllUsers from "services/users/get-all-users";
import getUser from "services/users/get-user";
import { ApiContext } from "types";

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserPage: NextPage<UserPageProps> = ({
  id,
  user,
  products,
}: UserPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <Flex>
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">
                <a>トップ</a>
              </Link>
            </BreadcrumbItem>
            {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
          </Breadcrumb>
        </Box>
        <Box>
          <Box>
            <UserProfileContainer userId={id} user={user} />
          </Box>
          <Box>
            <Separator />
          </Box>
          <UserProductCardListContainer userId={id} products={products} />
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };
  const users = await getAllUsers(context);
  const paths = users.map((u) => `/users/${u.id}`);

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };

  if (!params) {
    throw new Error("params is undefined");
  }

  const userId = Number(params.id);
  const [user, products] = await Promise.all([
    getUser(context, { id: userId }),
    getAllProducts(context, { userId }),
  ]);

  return {
    props: {
      id: userId,
      user,
      products: products ?? [],
    },
  };
};

export default UserPage;
