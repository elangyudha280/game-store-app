

function reducer(state,action){
    switch(action.type){
        case 'showDevide' :
           return {...state,showDevide:(state.showDevide) ? false : true} 
        case 'showModalLogout':
            return {...state,showDevide:false ,showModalLogout:(state.showModalLogout) ? false : true}
        default:
            return new Error('oops.. something wrong')
    }
}

export default reducer;