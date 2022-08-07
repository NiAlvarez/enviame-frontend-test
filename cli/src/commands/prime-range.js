const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(start, end) {
  const primes = []; 
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

const defineCommand = (program) => {
  program.command('get-prime-numbers')
  .description('Get the prime numbers from a range of integers')
  .argument('<number>', 'from number', parseInt)
  .argument('<number>', 'to number', parseInt)
  .action((start, end) => {
    // TODO: Validate is NaN
    const primeNumbers = getPrimes(start, end)
    console.log(primeNumbers);
  });
}

module.exports = defineCommand