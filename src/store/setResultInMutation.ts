import { Items } from "@/types/Items";

// type stateType<T> = {
//     loading: boolean,
//     data: T[] | null,
//     error: boolean,
// }
// type payloadType = {
//     loading: boolean,
//     data: Items[] | null
//     error: boolean,
// }

// const setResultInMutation = ( 
//     state: stateType<Items | channel | ...>,
type stateType = {
    loading: boolean,
    data: Items[] | null,
    error: boolean,
}
type payloadType = {
    loading: boolean,
    data: Items[] | null
    error: boolean,
}

const setResultInMutation = ( 
    state: stateType,
    payload: payloadType,
) => {
    console.log({ data: payload.data, error: payload.error, loading :payload.loading })
    state.data = payload.data;
    state.loading = payload.loading;
    state.error = payload.error
}

export default setResultInMutation