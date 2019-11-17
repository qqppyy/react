import request from './request'
import {GET_COMING_MOVIES} from './actionType'


export const getComingMovies=(movieIds)=>{
    return async dispatch=>{
        const result =await request({
            url:'/ajax/moreComingList',
            params:{
                token:'',
                movieIds
            }
        })
        dispatch({
            type:GET_COMING_MOVIES,
            payload:result.data
        })
    }
}

