// import RectLoader from "components/atoms/RectLoader";
// import ProductCardList from "components/organisms/ProductCardList";
// import useSearch from "services/products/use-search";
// import { Category, Condition } from "types";

// interface ProductCardListContainerProps {
//   category?: Category;
//   conditions?: Condition[];
// }

// const ProductCardListContainer = ({
//   category,
//   conditions,
// }: ProductCardListContainerProps) => {
//   const { products, isLoading } = useSearch(context, {
//     category,
//     conditions,
//   });

//   return (
//     <ProductCardList>
//       {isLoading &&
//         Array.from(Array(16), (_, k) => (
//           <Box key={k}>
//             <Box>
//               <RectLoader></RectLoader>
//             </Box>
//           </Box>
//         ))}
//       {!isLoading &&
//         products.map((p) => (
//           <Box key={p.id}>
//             <Link href={`/products/${p.id}`} passHref>
//               <a>
//                 <ProductCard></ProductCard>
//               </a>
//             </Link>
//           </Box>
//         ))}
//     </ProductCardList>
//   );
// };

// export default ProductCardListContainer;
