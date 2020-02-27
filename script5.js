const books = [
	{ title: 'Gatsby le magnifique', id: 133712, rented: 39 },
	{ title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
	{ title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
	{ title: 'Les frères Karamazov', id: 450911, rented: 55 },
	{ title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
	{ title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
	{ title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
	{ title: 'Le meilleur des mondes', id: 88847, rented: 58 },
	{ title: 'La disparition', id: 364445, rented: 33 },
	{ title: 'La lune seule le sait', id: 63541, rented: 43 },
	{ title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
	{ title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// QUESTION 1 
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let allRented = true
for (let index in books) {
	if (books[index].rented === 0) {
		allRented = false;
	}
}
console.log(allRented);

// QUESTION 2
console.log("\n\nQuel est livre le plus emprunté ?");
function findMostRented() {
	let mostRented;
	let temp = 0;
	for (let index in books) {
		if(books[index].rented > temp) {
			temp = (books[index].rented);
			mostRented = (books[index]);
		} 
	}
	return mostRented;
}
console.log(findMostRented());

// QUESTION 3
console.log("\n\nQuel est le livre le moins emprunté ?");
function findLeastRented() {
	let leastRented;
	let temp = books[0].rented;
	for (let index in books) {
		if(books[index].rented < temp) {
			temp = (books[index].rented);
			leastRented = (books[index]);
		}
	}
   return leastRented; 
}
console.log(findLeastRented());

// QUESTION 4
console.log("\n\nTrouve le livre avec l'ID: 873495 ;");
let found;
for (let index in books) {
  if (books[index].id === 873495) {
  	found = books[index];
  }
}
console.log(found);

// QUESTION 5
console.log("\n\nSupprime le livre avec l'ID: 133712 ;");
const idIs133712 = (elements) => elements.id === 133712;
index = books.findIndex(idIs133712);
books.splice(index, 1);
console.log(books);

// QUESTION 6
console.log("\n\nTrie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
function sortBooks(a, b) {
	if (a.title > b.title) {
		return 1;
	}
	if (a.title < b.title) {
		return -1;
	}
	return 0;
}
books.sort(sortBooks);
console.log(books);
