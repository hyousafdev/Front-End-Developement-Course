/*** There are 4 steps to implement the code ***/
//1st Step we import the necessary Hooks
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

//2nd step we set the initialState with object and inside the object we set 3 kind of states using useReducer function Hook
const initialState = {
    loading: true,
    error: '',
    post: {}
}
//
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
        return {
            loading: false,
            post: action.payload,
            error: ''
        }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }
            default:
                return state
    }
}
function DataFetchingComp() {
    //3rd step fetch the data using useReducer Hook
    const [state, dispatch] = useReducer(reducer, initialState)
    //
    useEffect(() => {
        // Here we just use the axios to fetch data and write the logic for axios method like .then and .catch
        axios.get('https://jsonplaceholder.typicode.com/posts/10')
        .then(response => {
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            dispatch({ type: 'FETCH_ERROR' })
        })
    }, [])
  return (
    <div>
        {/* 4th and final step is rendering with state.loading and so on because we set all the variables in the state above */}
        { state.loading ? 'Data is loading, please wait!' : state.post.title }
        { state.error ? state.error : null }
    </div>
  )
}

export default DataFetchingComp