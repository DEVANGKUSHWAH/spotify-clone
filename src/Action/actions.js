export const  ActionTypes = {
    LOG_IN: 'LOG_IN',
    LOG_IN_SUCCESS : "LOG_IN_SUCCESS",
    LOG_IN_ERROR: 'LOG_IN_ERROR',
    RESET_LOGIN:'RESET_LOGIN',

    REGISTER: 'REGISTER',
   REGISTER_SUCCESS : "REGISTER_SUCCESS",
    REGISTER_ERROR: 'REGISTER_ERROR',

    GET_CATEGORIES:"GET_CATEGORIES",
    GET_CATEGORIES_SUCCESS:"GET_CATEGORIES_SUCCESS",
    GET_CATEGORIES_ERROR:"GET_CATEGORIES_ERROR"


}

export class Actions {
    static register = (payload) => ({
        type:ActionTypes.REGISTER,
        payload
    })
    static registerSuccess = (payload) => ({
        type:ActionTypes.REGISTER_SUCCESS,
        payload
    })
    static registerError = (payload) => ({
        type:ActionTypes.REGISTER_ERROR,
        payload
    })
    static logIn = (payload) => ({
        type:ActionTypes.LOG_IN,
        payload
    })
    static logInSuccess = (payload) => ({
        type:ActionTypes.LOG_IN_SUCCESS,
        payload
    })
    static logInError = (payload) => ({
        type:ActionTypes.LOG_IN_ERROR,
        payload
    })
    static cleanLoginMessage = () => ({
        type:ActionTypes.RESET_LOGIN
    })

    static getCategories = () => ({
        type:ActionTypes.GET_CATEGORIES,
    })
    static getCategoriesSuccess = (payload) => ({
        type:ActionTypes.GET_CATEGORIES_SUCCESS,
        payload
    })
    static getCategoriesError = (payload) => ({
        type:ActionTypes.GET_CATEGORIES_ERROR,
        payload
    })
}
