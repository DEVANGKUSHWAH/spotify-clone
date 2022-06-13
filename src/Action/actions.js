export const  ActionTypes = {
    LOG_IN: 'LOG_IN',
    LOG_IN_SUCCESS : "LOG_IN_SUCCESS",
    LOG_IN_ERROR: 'LOG_IN_ERROR',

}

export class Actions {
    logIn = (payload) => ({
        type:ActionTypes.LOG_IN,
        payload
    })
    logInSuccess = (payload) => ({
        type:ActionTypes.LOG_IN_SUCCESS,
        payload
    })
    logInError = (payload) => ({
        type:ActionTypes.LOG_IN_ERROR,
        payload
    })
}
