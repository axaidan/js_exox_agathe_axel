// INIT ARRAY
const entrepreneurs = [
	{ first: 'Steve', last: 'Jobs', year: 1955 },
	{ first: 'Oprah', last: 'Winfrey', year: 1954 },
	{ first: 'Bill', last: 'Gates', year: 1955 },
	{ first: 'Sheryl', last: 'Sandberg', year: 1969 },
	{ first: 'Mark', last: 'Zuckerberg', year: 1984 },
	{ first: 'Beyonce', last: 'Knowles', year: 1981 },
	{ first: 'Jeff', last: 'Bezos', year: 1964 },
	{ first: 'Diane', last: 'Hendricks', year: 1947 },
	{ first: 'Elon', last: 'Musk', year: 1971 },
	{ first: 'Marissa', last: 'Mayer', year: 1975 },
	{ first: 'Walt', last: 'Disney', year: 1901 },
	{ first: 'Larry', last: 'Page', year: 1973 },
	{ first: 'Jack', last: 'Dorsey', year: 1976 },
	{ first: 'Evan', last: 'Spiegel', year: 1990 },
	{ first: 'Brian', last: 'Chesky', year: 1981 },
	{ first: 'Travis', last: 'Kalanick', year: 1976 },
	{ first: 'Marc', last: 'Andreessen', year: 1971 },
	{ first: 'Peter', last: 'Thiel', year: 1967 }
];

// QUESTION 1 
console.log("Lesquels sont nes dans les annees 70 ?");
for(let key in entrepreneurs) {
	if (entrepreneurs[key].year >= 1970 && entrepreneurs[key].year < 1980) {
		console.log(entrepreneurs[key]);
	}
}

// QUESTION 2
console.log("\n\nArray des prenoms et noms des entrepreneurs :");
let q2Array = [];
for(let key in entrepreneurs){
	let nameStr = "";
	nameStr = entrepreneurs[key].first +" "+ entrepreneurs[key].last;
	q2Array.push(nameStr);
} 
console.log(q2Array);

// QUESTION 3
console.log("\n\nAge qu'auraient les entrepreneurs aujourd'hui :");
for(let key in entrepreneurs) {
	console.log(`${entrepreneurs[key].first} ${entrepreneurs[key].last} aurait ${2020 - entrepreneurs[key].year} ans aujourd'hui`);
}

// QUESTION 4
console.log("\n\nEntrepreneurs tries par ordre alphabetique des noms de famille :");
function sortFunction(a, b) {
	if (a.last > b.last) {
		return 1;
	}
	if (a.last < b.last) {
		return -1;
	}
	return 0;
}
entrepreneurs.sort(sortFunction);
console.log(entrepreneurs);
