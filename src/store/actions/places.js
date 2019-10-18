import { ADD_PLACE } from './actionTypes'
export const getData = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName:placeName
    }
}


