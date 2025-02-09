function fib(n) {
    if (n == 0) {var arr = [0]; return arr;}
    else {
    var arr = [0,1];
    var length = n;
    fibonacci(n,arr, length);
    return arr;}
}

function fibonacci(n, arr, length) {
    if (n == 1) {return;}
    arr.push(arr[length-n] + arr[length-n+1]);
    n--;
    return fibonacci(n, arr, length);
}
