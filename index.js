// p1
const multiplesOfSixAndNine = () => {
	for (let n = 1; n <= 100; n++) if (n % 6 === 0 && n % 9 === 0) console.log(n);
}
// multiplesOfSixAndNine();

// p2
const greaterNum = (numOne, numTwo) => {
	if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return null;
	if (numOne === numTwo) return "both integers are equal";
	else if (numOne > numTwo) return numOne;
	return numTwo;
}
// console.log(greaterNum(1,"4"));
// console.log(greaterNum(1,1));
// console.log(greaterNum(1,2));
// console.log(greaterNum(2,1));

// p1 ?
const sumOfFourAndSix = () => {
	let sum = 0;
	for (let n = 1; n <= 1000; n++) if (n % 4 === 0 && n % 6 === 0) sum += n;
	return sum;
}
// console.log(sumOfFourAndSix());

// p2 ?
const oddAndEvenToN = (n) => {
	for (let v = 0; v <= n; v++) {
		if (v % 2 === 0) console.log(`${v} is even`);
		else console.log(`${v} is odd`);
	}
}
// oddAndEvenToN(5);

// p3
const sumOfNotDivisibleByTen = () => {
	let sum = 0;
	for (let n = 1; n <= 1000; n++) if (n % 10 !== 0) sum += n;
	return sum;
}
console.log(sumOfNotDivisibleByTen());

