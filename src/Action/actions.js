export const  ActionTypes = {
    LOG_IN: 'LOG_IN',
    LOG_IN_SUCCESS : "LOG_IN_SUCCESS",
    LOG_IN_ERROR: 'LOG_IN_ERROR',

}

export class Actions {
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
}
