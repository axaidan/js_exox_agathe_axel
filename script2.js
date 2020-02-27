let n = prompt("donne un nombre :");

function factorial(n) {
	result = 1;
	while (n > 0) {
		result *= n;	
		n--;
	}
	return result;
}

console.log(factorial(n));
