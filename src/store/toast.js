const SHOW_TOAST_SUCCESS = 'SHOW_TOAST_SUCCESS'
const SHOW_TOAST_ERROR = 'SHOW_TOAST_ERROR'
const SHOW_TOAST_WARNING = 'SHOW_TOAST_WARNING'
const SHOW_TOAST_INFO = 'SHOW_TOAST_INFO'
const HIDE_TOAST = 'HIDE_TOAST'

export const showToastSuccess = toast => ({
    type: SHOW_TOAST_SUCCESS,
    toast,
})

export const showToastError = toast => ({
    type: SHOW_TOAST_ERROR,
    toast,
})

export const showToastWarning = toast => ({
    type: SHOW_TOAST_WARNING,
    toast,
})

export const showToastInfo = toast => ({
    type: SHOW_TOAST_INFO,
    toast,
})

export const hideToast = () => ({
    type: HIDE_TOAST,
})

const toast = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_TOAST_SUCCESS':
            return { ...action.toast, type: 'success' }
        case 'SHOW_TOAST_ERROR':
            return { ...action.toast, type: 'error' }
        case 'SHOW_TOAST_WARNING':
            return { ...action.toast, type: 'warning' }
        case 'SHOW_TOAST_INFO':
            return { ...action.toast, type: 'info' }
        case 'HIDE_TOAST':
            return {}
        default:
            return state
    }
}

export default toast