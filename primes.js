function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        dofunction findDistinctPrimeFactors() {
  let num = parseInt(document.getElementById("max").value);
  let factors = [];

  while (num % 2 === 0) {
    if (!factors.includes(2)) {
      factors.push(2);
    }
    num = num / 2;
  }

  for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
    // While i divides num, add i to factors and divide num
    while (num % i === 0) {
      if (!factors.includes(i)) {
        factors.push(i);
      }
      num = num / i;
    }
  }
  
  if (num > 2) {
    if (!factors.includes(num)) {
      factors.push(num);
    }
  }
  
  document.getElementById("result").innerHTML = "Distinct Prime Factors: " + factors.join(', ');
}
cument.getElementById("result").innerHTML = num1 / num2;
}
