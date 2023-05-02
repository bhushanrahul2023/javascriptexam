function perfectsquare() {
    let n = parseInt(prompt("Enter a number:"));
    let left = 1;
    let right = n;
    
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      
      if (mid * mid === n) {
        alert(n + " is a perfect square!");
        return;
      } else if (mid * mid > n) {
        right = mid - 1;
      } else if (mid * mid < n) {
        left = mid + 1;
      }    
    }
  
    alert(n + " is not a perfect square.");
  }
  
  perfectsquare();