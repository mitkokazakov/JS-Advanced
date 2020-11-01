function getFibonator() {

    let first = 0;
    let second = 1;

    function fibonachi() {

        let lastNum = first + second;
        first = second;
        second = lastNum;
        return first;

    }

    return fibonachi;

}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());