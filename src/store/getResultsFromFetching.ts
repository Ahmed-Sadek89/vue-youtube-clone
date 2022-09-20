import { fetchFromApi } from "@/assets/utils/ApiFetch"
import { Commit } from "vuex"

const getResultsFromFetching = async (
  commit: Commit, 
  apiQuery: string,
  mutationName: string
) => {
  // fetching is loading
  console.log("fetching is loading")
  commit(mutationName, {
    loading: true,
    data: [],
    error: false
  })
  await fetchFromApi(apiQuery)
  .then(res => {
    // fetching success
    console.log("fetching is success")
    commit(mutationName, {
        loading: false,
        data: res.data?.items,
        error: false
    })
  })
  .catch(() => {
    // fetching error
    commit(mutationName, {
      loading: false,
      data: [],
      error: true
    })
  })
}

export default getResultsFromFetching