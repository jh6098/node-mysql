// 첫번째 방법(두개이상)
const name = 'Mike'

const add = function(a,b){
    return a + b
}
const minus = function(a,b){
    return a - b
} 
module.exports ={name,add,minus}


// 두번째 방법
// module.exports = {
//     name : "Mike" ,

//     add : function(a,b){
//         return a + b
//     },

//     minus : function(a,b){
//         return a - b
//     }
// }





module.exports = add
module.exports = name  // name을 노출시켜줘야 다른파일에서 받을수있다.
// mouule.exports 이거를 두개해주면 렉이걸린다.

// 두개이상 할때의 첫번째 방법
// module.exports ={add,minus,name}

