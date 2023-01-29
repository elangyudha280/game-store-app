



// fungsi untk set local storage 
let setStorage = {
    addStorage(key,value){
        return localStorage.setItem(key,value)
    },
    removeStorage(key){
        return localStorage.removeItem(key)
    }
}


export default setStorage