import axios from 'axios'
import {
    showToastSuccess,
    showToastError
} from './toast'

const TRANSFORM_VALUE_LOAD = 'TRANSFORM_VALUE_LOAD'
const TRANSFORM_VALUE_SUCCESS = 'TRANSFORM_VALUE_SUCCESS'
const TRANSFORM_VALUE_ERROR = 'TRANSFORM_VALUE_ERROR'

const LOWERCASE_ENDPOINT = '/api/lowercase'
const UPPERCASE_ENDPOINT = '/api/uppercase'

const UPPERCASE = 'uppercase'
const LOWERCASE = 'lowercase'

const transformText = (input, mode = LOWERCASE) => dispatch => {
    mode = mode.toLowerCase()
    const endpoint = mode === UPPERCASE ? UPPERCASE_ENDPOINT : LOWERCASE_ENDPOINT

    dispatch({ type: TRANSFORM_VALUE_LOAD })
    axios.post(endpoint, { input })
        .then(res => {
            dispatch({ type: TRANSFORM_VALUE_SUCCESS, payload: res.data, input })
            dispatch(showToastSuccess({ message: 'The Dude abides!' }))
        })
        .catch(err => {
            dispatch({ type: TRANSFORM_VALUE_ERROR, payload: err, input })
            dispatch(showToastError({ message: 'Sorry, there was an error. Please try again.' }))
        })
}

export const transformToLowerCase = input => transformText(input)
export const transformToUpperCase = input => transformText(input, UPPERCASE)

const initialState = {
    transformedValue: '',
    isLoading: false,
    error: null,
    input: ''
}

export default function textTransform(state = initialState, { type, payload , input}) {
    switch (type) {
        case TRANSFORM_VALUE_LOAD:
            return { ...state, isLoading: true, transformedValue: '', input }
        case TRANSFORM_VALUE_SUCCESS:
            return { ...state, isLoading: false, transformedValue: payload.output, error: null, input }
        case TRANSFORM_VALUE_ERROR:
            return { ...state, isLoading: false, error: payload.message, input }
        default: return state
    }
}