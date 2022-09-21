import { createStore } from 'vuex'
import getResultsFromFetching from './getResultsFromFetching'
import setResultInMutation from './setResultInMutation'

export default createStore({
    state: {
        categoryName: 'New',
        homeVediosState: {
            data: [],
            loading: false, 
            error: false
        },
        channelDetails: {
            data: [],
            loading: false, 
            error: false
        },
        vediosRelatedToChannel: {
            data: [],
            loading: false, 
            error: false
        },
        searchResultState: {
            data: [],
            loading: false, 
            error: false
        },

        vedioDetailsState: {
            data: [],
            loading: false, 
            error: false
        },
        vediosRelatedToVedioIdState: {
            data: [],
            loading: false, 
            error: false
        },
    },
    mutations: {
        // set category
        categorynameMutation(state, payload) {
            state.categoryName = payload
        },
        
        // set vedios and channels by category
        homeVediosMutation( state, { data, error, loading } ) {
            setResultInMutation( state.homeVediosState, { data, error, loading }  )
        },

        // set channel Details in state
        setChannelMutation( state, { data, error, loading } ) {
            setResultInMutation( state.channelDetails, { data, error, loading }  )
        },

        // set vedios that related to selected channel in state
        setVediosRelatedToChannel( state, { data, error, loading } ) {
            setResultInMutation( state.vediosRelatedToChannel, { data, error, loading }  )
        },

        // set search result in state
        setSearchResultMutation( state, { data, error, loading } ) {
            setResultInMutation( state.searchResultState, { data, error, loading }  )
        },

        // set vedio details in state
        setVedioDetailsMutaion( state, { data, error, loading } ) {
            setResultInMutation( state.vedioDetailsState, { data, error, loading } )
        },

        // set vedios related to vedio id in state
        setVediosRelatedToVedioIdMutaion( state, { data, error, loading } ) {
            setResultInMutation( state.vediosRelatedToVedioIdState, { data, error, loading } )
        },
    },
    actions: {
        // for getting all vedios and channels by category name
        homeVediosAction( { commit }, payload ) {
            
            const mutationName: string = 'homeVediosMutation';
            const apiQuery: string = `search?part=snippet&q=${payload}`
            getResultsFromFetching(commit, apiQuery, mutationName)
        },

        // get channel details by channel id
        getChannelDetailsByIdAction( { commit }, payload ) {
            const mutationName: string = 'setChannelMutation';
            const apiQuery: string = `channels?part=snippet&id=${payload}`
            getResultsFromFetching(commit, apiQuery, mutationName)
        },

        // get vedios related to selected channel by channel id
        getVediosByChannelIdAction( { commit }, payload ) {
            const mutationName: string = 'setVediosRelatedToChannel';
            const apiQuery: string = `search?channelId=${payload}&part=snippet&order=date`
            getResultsFromFetching(commit, apiQuery, mutationName)
        },

        // get search result by what you wanna search
        searchResultAction( { commit }, payload ) {
            const mutationName: string = 'setSearchResultMutation';
            const apiQuery: string = `search?part=snippet&q=${payload}`
            getResultsFromFetching(commit, apiQuery, mutationName)
        },

        // get vedio details by vedio id
        getVedioDetailsAction( { commit }, payload ) {
            const mutationName: string = 'setVedioDetailsMutaion';
            const apiQuery: string = `videos?part=snippet,statistics&id=${payload}`
            getResultsFromFetching(commit, apiQuery, mutationName)
        },

        // get all vedios related to current vedio id
        getVediosRelatedToVedioId( { commit }, payload ) {
            const mutationName: string = 'setVediosRelatedToVedioIdMutaion';
            const apiQuery: string = `search?part=snippet&relatedToVideoId=${payload}&type=video`
            getResultsFromFetching(commit, apiQuery, mutationName)
        },
    }
})
