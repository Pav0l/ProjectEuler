// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const palindromeCheck = () => {
  let product = [];
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      let res = j * i
      if (res.toString() === res.toString().split('').reverse().join('')) {
        product.push(res);
      }
    }
  }
  console.log(product.sort((a, b) => b > a)[0])
}
palindromeCheck()