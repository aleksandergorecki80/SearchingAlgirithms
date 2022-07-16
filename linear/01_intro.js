const number = 55;
const arr = [11,55,4,0,1,8]
const linearSearch = (arr,number) => {
    let result;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === number){
            return result = i
        }
        result = -1;
    }
    return result
}

console.log(linearSearch(arr, number))