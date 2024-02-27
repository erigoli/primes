function findDistinctPrimeFactors() {
  let num = parseInt(document.getElementById("max").value);
  let factors = [];
  
  // Find all 2s that divide num
  while (num % 2 === 0) {
    if (!factors.includes(2)) {
      factors.push(2);
    }
    num = num / 2;
  }
  
  // num must be odd at this point. So we can skip one element
  // (Note: i = i + 2)
  for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
    // While i divides num, add i to factors and divide num
    while (num % i === 0) {
      if (!factors.includes(i)) {
        factors.push(i);
      }
      num = num / i;
    }
  }
  
  // This condition is to handle the case when num is a prime number
  // greater than 2
  if (num > 2) {
    if (!factors.includes(num)) {
      factors.push(num);
    }
  }
  
  document.getElementById("result").innerHTML = "Distinct Prime Factors: " + factors.join(', ');
}

