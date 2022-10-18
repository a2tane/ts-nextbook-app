// import { Router } from "@mui/icons-material";
// import { queryAllByAltText } from "@testing-library/react";
// import BreadcrumbItem from "components/atoms/BreadcrumbItem";
// import FilterGroup from "components/molecules/FilterGroup";
// import Layout from "components/templates/Layout";
// import ProductCardListContainer from "containers/ProductCardListContainer";
// import { NextPage } from "next";
// import { useRouter } from "next/router";
// import { Category, Condition } from "types";

// const Anchor = styled(Text)`
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const categoryNameDict: Record<Category, string> = {
//   book: "本",
//   shoes: "シューズ",
//   clothes: "トップス",
// };

// const SearchPage: NextPage = () => {
//     const router = useRouter()
//     const slug: Category[] = Array.isArray(router.query.slug) ? (router.query.slug as Category[]) : []

//     const conditions = (() => {
//         if (Array.isArray(router.query.condition)) {
//             return router.query.condition as Condition[]
//         } else if (router.query.condition) {
//             return [router.query.conditon as Condition]
//         } else {
//             return []
//         }
//     }) ()
//     const handleChange = (selected: string[]) => {
//         router.push({
//             pathname: router.pathname,
//             query: {
//                 slug,
//                 condition: selected,
//             }
//         })
//     }

//     return (
//         <Layout>
//             <Box>
//                 <Box>
//                     <Breadcrumb>
//                     <BreadcrumbItem>
//                     <link>
//                     </link>

//                     </BreadcrumbItem>
//                     <BreadcrumbItem>
//                    <Link>
//                    </Link>
//                     </BreadcrumbItem>
//                     {slug.slice(0, slug.length -1).map((categrory, i) => (
//                         <BreadcrumbItem>

//                         <Link></Link>
//                         </BreadcrumbItem>
//                     ))}
//                     {slug.length == 0 && <BreadcrumbItem>suberte</BreadcrumbItem>}
//                     {slug.length > 0} && (<BreadcrumbItem>
//                     {categoryNameDict[slug[slug.length - 1]] ?? 'Unknown'}</BreadcrumbItem>)
//                     </Breadcrumb>

//                 </Box>
//             </Box>
//             <FilterGroup title="items=
//             value={conditions}"></FilterGroup>
//             <Text>
//                 category
//             </Text>
//             <Box>
//                 <LInK>
//                 <Anchor>
//                     </Anchor></LInK>
//             </Box>
//             {Object.keys(categoryNameDict).map(
//                 (category, i) => {
//                     (<Box>
//                         <Link>
//                         <Anchor>
//                             {categoryNameDict[category as Category</Anchor></Link>
//                     </Box>)
//                 }
//             )}
//             <ProductCardListContainer
//             category={slug.length > 0 ? slug{slug.length -1] : undefined}}
//             conditions={conditions}
//         </Layout>
//     )
// }
