import {DATA} from "./bank/narekAccount.js"
import {data} from "./bank/narekAccount.js"



// Promise խոստում
// status: pending(փուլ) նշ է ինչ որ բան որ մեզ խոստացել է չի նշանակում միանգամից կլինի 
// status: fullfield (data)
// status: rejected (err)
// then and catch methods


function readNarekAccount() {
    return new Promise(function(resolve,reject) {
       resolve(DATA)
       if(error) {
        return reject(error)
    }
    })
}
function readGasparAccount() {
    return new Promise(function(resolve,reject) {
       resolve(data)
       if(error) {
        return reject(error)
    }
    })
}

readNarekAccount()
.then(function(result) {
    console.log("promise result",result)
    return readGasparAccount()
})
.then(function(secondResult) {
    console.log("promise result",secondResult)
})
.catch(function(error) {
    console.log("err")
})