export const authReducer = (state = {}, action) => {

    switch (action.type) { 
        case 'open':
            return {
                logged: true
            }
        case 'close':
            return{
                logged: false
            }
     
        default:
            return state;
    }

}