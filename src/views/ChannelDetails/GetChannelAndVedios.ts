import { Items } from "@/types/Items";
import { computed } from "vue";
import { useStore } from "vuex";

type stateName = {
    loading: boolean, 
    data: Items[], 
    error: boolean
}
const GetChannelAndVedios = (
    channelId: string | string[],
    stateName: stateName,
    dispatchName: string
) => {
    
    const { dispatch } = useStore();

    const data = computed(() => {
        return stateName.data
    })

    const loading = computed(() => {
        return stateName.loading
    })
    const error = computed(() => {
        return stateName.error
    })
    console.log(dispatchName)
    dispatch(dispatchName, channelId)
    return {
        data,
        loading,
        error
    }
}

export default GetChannelAndVedios