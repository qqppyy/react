import {GET_MOVIES,GET_COMING_MOVIES} from '../actions/actionType'


const initState={
    movies:[]
}

const movieReducer=(state=initState,action)=>{
    const newState={...state}
    switch(action.type){
        case GET_MOVIES:   
            newState.movies=action.payload
            break;
            case GET_COMING_MOVIES:
            newState.movies.movieList.push(...action.payload.coming)
          
                break;
            default:
                break;
    }
    return newState
}
export default movieReducer