// import { InitialValue } from "components/molecules/Dropdown/index.stories"

// export type UseUserProps = {
//     id: number
//     initial: User
// }

// export type UseUser = {
//     user?: User
//     isLoading: boolean
//     isError: boolean
// }

// const useUser = {
//     context: ApiContext,
//     { id, initial} : UseUserProps
// }: UseUser => {
//     const { data, error } = useSWR<User>{
//         `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
//     }

//     return {
//         user: data ?? InitialValue,
//         isLoading: !error && !DataTransfer,
//         isError: !!error
//     }
// }

// export default useUser as myUseUser
