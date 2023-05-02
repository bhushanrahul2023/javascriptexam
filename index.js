function isPerfectSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

let input = prompt("Enter a number:");
let number = parseInt(input);

if (isPerfectSquare(number)) {
  alert(number + " is a perfect square!");
} else if (!isNaN(number)) {
  alert(number + " is not a perfect square.");
}