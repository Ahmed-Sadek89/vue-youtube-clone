import { Items } from "@/types/Items";
import { PropType } from "vue";

export const props = {
    categorySelected: {
        required: true,
        type: String,
    },
    loading: {
        required: true,
        type: Boolean
    },
    error: {
        required: true,
        type: Boolean
    },
    data: {
        required: true,
        type: Array as PropType<Items[]>,
        default: []
    },
}