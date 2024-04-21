//this line of code is importing a function named createSlice from the Redux toolkit library.
import { createSlice } from '@reduxjs/toolkit'

//this line of code is creating an object named initialState that contains the objectId and apiData properties. 
const initialState = {
    objectId: 10245,
    apiData: {}
}
//this line of code is the beginning of a declaration for a constant variable name dataSlice.
//dataslice,which is the being exported for use in other parts of your application.
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData : action.payload}
        },
        clearData: () => {
            return initialState
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        }
    }
})

export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer