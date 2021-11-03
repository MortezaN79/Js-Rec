function recPow(num , pow) {
    if(pow === 1){
        return num;
    }
    return num*recPow(num ,pow-1)
}

console.log(recPow(2,3))