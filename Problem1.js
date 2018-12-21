
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiples = (x, y) => {
	let result = 0;
	for (let i = 0; i <= 1000; i++) {
		if (i % x === 0 || i % y ===0) {
			result += i;
		}
	}
	console.log(result);
}

sumOfMultiples(3, 5);