let etageNumber = prompt("Donne un nombre d'etage (entre 1 et 25):");

pyramide(etageNumber);

function pyramide(n) {
	if (n < 1 || n > 25) {
		console.log("Argument Invalide !");
		return false;
	}
	let etageActuel = 1
	while (etageActuel <= n) {
		let etageStr = "";
		let espacesNumber = 0;
		let diesesNumber = 1;
		while (espacesNumber < n - etageActuel) {
			etageStr = etageStr + " ";
			espacesNumber++;
		}
		while (diesesNumber <= etageActuel) {
			etageStr = etageStr + "#";
			diesesNumber ++;
		}
		console.log(etageStr);
		etageActuel++;
	}
}
