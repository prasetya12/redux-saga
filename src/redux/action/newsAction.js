export const NEWS_LIST_REQUEST = "NEWS_LIST_REQUEST";
export const NEWS_LIST_SUCCESS = "NEWS_LIST_SUCCESS";
export const NEWS_LIST_FAILURE = "NEWS_LIST_FAILURE";

function list(params={}){
    return {
        type:NEWS_LIST_REQUEST,
        ...params
    }
}


export{
    list
}