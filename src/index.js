const HUMAN_READABLE_NUMBERS = {
	1: "one",       2: "two",        3: "three",     4: "four",      5: "five",
	6: "six",       7: "seven",      8: "eight",     9: "nine",     10: "ten",
	11: "eleven",  12: "twelve",    13: "thirteen", 14: "fourteen", 15: "fifteen",
	16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
	30: "thirty",  40: "forty",     50: "fifty",    60: "sixty",    70: "seventy",
	80: "eighty",  90: "ninety",
};

module.exports = function toReadable (number) {
	if(number === 0) {
		return 'zero';
	}

	let result = '';

	if(number >= 100 ) {
		result += HUMAN_READABLE_NUMBERS[Math.floor(number / 100)] + ' hundred ';		 
		number = number - Math.floor(number / 100) * 100;
	}
	
	if(HUMAN_READABLE_NUMBERS[number]) {
		result += HUMAN_READABLE_NUMBERS[number];
	} else 
	if(number > 0) {
		result += HUMAN_READABLE_NUMBERS[Math.floor(number / 10) * 10] + ' ' +
		HUMAN_READABLE_NUMBERS[number - Math.floor(number / 10) * 10];
	}

	return result.replace(/\s+/g, ' ').trim();
}

