// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


const getAllFactorsFor = remainder => {
	let factors = [];

	for (let i = 2; i <= remainder; i++) {
	    while ((remainder % i) === 0) {
	        factors.push(i);
	        remainder /= i;
	    }
	}
	console.log(result.sort((a, b) => b > a)[0]);
}

getAllFactorsFor(600851475143);
