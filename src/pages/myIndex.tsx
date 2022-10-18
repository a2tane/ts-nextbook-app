// import Box from "components/layout/Box";
// import ProductCard from "components/organisms/ProductCard";
// import ProductCardCarousel from "components/organisms/ProductCardCarousel";
// import Link from "next/link";
// import { getStaticProps } from "pages";
// import { Product } from "types";

// type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

// const HomePage: NextPage<HomePageProps> = ({
//   bookProducts,
//   clothesProducts,
//   shoesProducts,
// }: HomePageProps) => {
//   const renderProductCardCarousel = (products: Product[]) => {
//     return (
//       <ProductCardCarousel>
//         {products.map((item, index) => {
//           reuturn(
//             <Box>
//               <Link href={`/products/${p.id}`} passHref>
//                 <a>
//                   <ProductCard title={""} price={0} imageUrl={""} />
//                 </a>
//               </Link>
//             </Box>
//           );
//         })}
//       </ProductCardCarousel>
//     );
//   };

//   return (
//     <Layout>
//       <Flex>
//         <Flex>
//           <Box>
//             <Text>www</Text>
//             <Text></Text>
//             <Box>{renderProductCardCarousel(clothesProducts)}</Box>
//           </Box>
//         </Flex>
//       </Flex>
//     </Layout>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const context: ApiContext = {
//     apiRootUrl: process.env.Path || "http://localhost:5000",
//   };

//   const [clothesProducts, bookProducts, shoesProducts] = await Promise.all([
//     getAllProducts(context, { category: "clothes", limit: 6, page:1}),
//     getAllProducts(context, { category: "clothes", limit: 6, page:1}),
//     getAllProducts(context, { category: "clothes", limit: 6, page:1}),
//   ])

//   return (
//     props: {
//         clothesProducts,
//         bookProducts,
//         shoesProducts,
//     },
//     revalidate: 60
//   )
// };
