import { combineReducers } from 'redux';

import textTransform from './textTransform'
import toast from './toast'

export default combineReducers({
    textTransform,
    toast
})