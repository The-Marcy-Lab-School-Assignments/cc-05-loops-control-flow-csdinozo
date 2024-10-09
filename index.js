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
// console.log(sumOfNotDivisibleByTen());

// p4
const greaterNumFour = (numOne, numTwo, numThree, numFour) => {
	// usage of 'integers' was somewhat misleading --- replaced !Number.isInteger() with type of !== 'number'
	if (typeof numOne !== 'number' || typeof numTwo !== 'number' || typeof numThree !== 'number' || typeof numFour !== 'number') return null;
	if (numOne === numTwo && numTwo === numThree && numThree === numFour) return "all integers are equal";
	if (numOne >= numTwo) {
		if (numOne === numTwo) {
			if (numTwo === numThree || numTwo === numFour) return "three integers are equal";
			return "two integers are equal";
		}
		else if (numTwo === numThree || numTwo === numFour) {
			if (numTwo === numThree && numThree === numFour) return "three integers are equal";
			return "two integers are equal";
		}

		if (numOne >= numThree) {
			if (numOne === numThree) {
				if (numThree === numFour) return "three integers are equal";
				return "two integers are equal";
			}
			else if (numOne === numFour) return "two integers are equal";
			
			if (numFour > numOne) return numFour;
			return numOne;
		}
	}
	else if (numTwo >= numThree) {
		if (numTwo === numThree) {
			if (numThree === numFour) return "three integers are equal";
			return "two integers are equal";
		}
		else if (numTwo === numFour) return "two integers are equal";

		if (numFour > numTwo) return numFour;
		return numTwo;
	}
	else if (numThree >= numFour) {
		if (numThree === numFour) return "two integers are equal";
		return numThree;
	}
	return numFour;
}
// console.log(greaterNumFour(10, 7, 16, 80)) //returns 80
// console.log(greaterNumFour(1.14, 1.14, 5, 7)) //returns "two integers are equal"
// console.log(greaterNumFour(1.14, 1.14, 1.14, 7)) //returns "three integers are equal"
// console.log(greaterNumFour("21", 21, 60, 3)) //returns null

// b1
const multiplesOfFourAndSix = () => {
	let a = [];
	// inclusive?
	for (let i = 1; i <= 100; i++) if (i % 4 === 0 && i % 6 === 0) a.push(i);
	return a;
}
// console.log(multiplesOfFourAndSix());

// b2
const countMultiplesOfTwo = (a) => {
	let c = 0;
	for (let i = 0; i < a.length; i++) if (a[i] % 2 === 0) c++;
	return c;
}
// console.log(countMultiplesOfTwo([2,4,5]));

