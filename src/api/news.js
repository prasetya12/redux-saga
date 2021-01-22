import {getApi} from './api'

function list(action){
    let params={
        apiKey:process.env.REACT_APP_KEY,
        country:'id'
    }

    let axios = getApi();
    return axios.get("/top-headlines",{
        params:params
    })
}


export {list};  