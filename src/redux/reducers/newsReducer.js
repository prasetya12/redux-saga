import * as actions from "../action/newsAction"

const initialState = {
    data:[],
    isLoading:false,
    isError:false
}

function list(state = initialState, action){
    switch(action.type){
        case actions.NEWS_LIST_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        
        case actions.NEWS_LIST_SUCCESS:
            return {
                ...state,
                data:action.data.
                articles,
                isLoading:false
            }
        case actions.NEWS_LIST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        
        default:
            return state;
    }
}

export {
    list
}