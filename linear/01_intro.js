const arr = [11,55,4,0,1,8]
const linearSearch = (arr,number) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === number) return i;
    }
    return -1
}

console.log(linearSearch(arr, 11))
console.log(linearSearch(arr, 8))
console.log(linearSearch(arr, 4))
console.log(linearSearch(arr, 99))