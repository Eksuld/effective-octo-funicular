function getSumOfSequence(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr[0] + arr[arr.length-1]

}





console.log(getSumOfSequence(5));