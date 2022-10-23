const getSumOfNumbers = (number, type) => {
    let sum = 0;
    let acc = number;
    if(type === 'odd') {
        for(let i = 0; i < acc; i++) {
            if(number % 2) {
                sum += number;
                --number;
            } else { --number; }
        }
    }
    else if(type === 'even') {
        for(let i = 0; i < acc; i++) {
            if(number % 2 != 1) {
                sum += number;
                --number;
            } else { 
                --number;
            }
        }
    }
    else if(type === '') {
        for(let i = 0; i < acc; i++) {
            sum +=number;
            --number
        }
    }
    return sum;
}

console.log(getSumOfNumbers(10, ''));