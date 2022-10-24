// import BreadcrumbItem from "components/atoms/BreadcrumbItem";
// import Breadcrumb from "components/molecules/Breadcrumb";
// import { InitialValue } from "components/molecules/Dropdown/index.stories";
// import getAllProducts from "services/products/get-all-products";
// import getProduct from "services/products/get-product";
// import { ApiContext, Category } from "types";

// const categorynameDict: Record<Category, string> = {
//   book: "本",
//   shoes: "shoes",
//   clothes: "トップス",
// };

// const context: ApiContext = {
//   apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
// };

// type ProductPageProps = InferGetStaticPropsType<typeof getStaticProps>;

// const ProductPage: NextPage<ProductPageProps> = ({
//   id,
//   product: InitialValue,
// }: ProductPageProps) => {
//   const router = useRouter();
//   const data = usePropduct(context, { id, initial });
//   const handleAddToCartButtonClick = () => {
//     router.push("/push");
//   };

//   if (router.isFallbak) {
//     return <div>Loading</div>;
//   }

//   const product = data.product ?? Initial;

//   return (
//     <Layout>
//       <Flex>
//         <Box>
//           <Breadcrumb>
//             <BreadcrumbItem></BreadcrumbItem>
//           </Breadcrumb>
//           <Flex>
//             <ProductCard></ProductCard>
//           </Flex>
//           <Box>
//             <Link href={???}>
//             <a>
//                 <UserProfile></UserProfile>
//             </a></Link>
//           </Box>
//         </Box>
//         <Box>
//             <Flex>
//                 <Box>
//                     {product.description.split('\n').map((text, i) => (<Text>text</Text>))}
//                 </Box>
//                 <AddToCartButtonContainer product={product} onAddToCartButtonClick={handleAddToCartButtonClick}>

//                 </AddToCartButtonContainer>
//             </Flex>
//         </Box>
//       </Flex>
//     </Layout>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//     const context: ApiContext = {
//         apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000'
//     }
//     const products = await getAllProducts(context)
//     const paths = products.map((p) => '/products/${p.id}')

//     return { paths, fallback: true}
// }

// export const getStaticProps: GetStaticPRops = async ({params}: GetStaticPropsContext)
//  => {
//     const context: ApiContext = {
//         apiRootUrl
//     }
//     if (!params) {
//         throw new Error('params is undefined')
//     }

//     const productId = Number(paramas.id)
//     const product = await getProduct(context, { id: prouctId})

//     return {
//         props: {
//             id: productId,
//             product,
//         },
//         revalidate: 10
//     }
//  }

//  export default ProductPage
