import { Items } from "@/types/Items";
import { computed } from "vue";
import { useStore } from "vuex";

type stateName = {
    loading: boolean, 
    data: Items[], 
    error: boolean
}
const DispatchData = (
    id_param: string | string[],
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
    dispatch(dispatchName, id_param)
    return {
        data,
        loading,
        error
    }
}

export default DispatchData