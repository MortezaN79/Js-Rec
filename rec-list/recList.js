function recList(arr,count){
    for (let i = 0; i <arr.length ; i++) {
        if( typeof arr[i] == 'number' &&
            arr[i]=== Math.floor(arr[i]) )
            count++
        else if (typeof arr[i] == 'object')
            count += recList(arr[i],0)
    }
    return count
}

arr1 = [[[5],3],0,2,['foo'],[],[4,[5.1,6]]]
console.log(recList(arr1,0))
