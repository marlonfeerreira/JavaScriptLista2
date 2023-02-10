function primo(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
console.log(primo(1)) 
console.log(primo(7))
console.log(primo(10))