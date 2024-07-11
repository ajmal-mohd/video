


function sum(a,b,callback){

    let result=a+b
    callback(result)
}





sum(10,20,function totalSum(result){

    console.log("total is"+result);
})