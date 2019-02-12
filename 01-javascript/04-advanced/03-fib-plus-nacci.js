function fib() {
    var las = 0;
    var firs = 1;

    function nacci() {
        const temp = las;
        console.log(firs);

        las = firs;
        firs = firs + temp;
    }
    return nacci
}
const fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()