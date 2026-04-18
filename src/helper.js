let randomGen = ()=>{
    return Math.floor(Math.random() * 10)
}
let newArr = ()=>{
    return [randomGen(),randomGen(),randomGen()]
}
function  sum(arr) {
    return arr.reduce((sum,value)=> sum + value)
}
export {newArr,sum}