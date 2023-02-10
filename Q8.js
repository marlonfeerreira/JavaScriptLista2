function fibonacci(n) {
    let sequence = [0,1];
    if(n==1){
        sequence.pop()
    }
    for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 2] + sequence[i - 1]);
        
    }
    return sequence.join(", ") + (n > 0 ? "..." : "");
}
console.log(fibonacci(7))
console.log(fibonacci(1))
console.log(fibonacci(3))
