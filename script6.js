// SEPARER PAR GROUPES DE TROIS LETTRES

let seq = "CCUCGCCGGUACUUCUCG"; 

if (seq.length % 3 !== 0) {
	console.log("Sequence Invalide !");
}
else {

	let arr = [];
	let index = 0;
	let length = seq.length;
	let mini_seq = "";

	while (index < length) {
		mini_seq = mini_seq + seq[index];	
		index++;
		if (index % 3 === 0) {
			arr.push(mini_seq);
			mini_seq = "";
		}
	}
	console.log(arr);

	// TRADUIRE

	let output_arr = [];
	arr.forEach(eachValue => {
		if (eachValue === "UCU" || eachValue === "UCA" || eachValue === "UCG" || eachValue === "AGU" || eachValue === "AGC" || eachValue === "UCC") {
			output_arr.push("Serine");	
		}
		else if (eachValue === "CCU" || eachValue === "CCC" || eachValue === "CCA" || eachValue === "CCG") {
			output_arr.push("Proline");	
		}
		else if (eachValue === "UUA" || eachValue === "UUG") {
			output_arr.push("Leucine");	
		}
		else if (eachValue === "UUU" || eachValue === "UUC") {
			output_arr.push("Phenylalanine");	
		}
		else if (eachValue === "CGU" || eachValue === "CGC" || eachValue === "CGA" || eachValue === "AGA" || eachValue === "AGG" || eachValue === "CGG") {
			output_arr.push("Arginine");	
		}
		else if (eachValue === "UAU" || eachValue === "UAC") {
			output_arr.push("Tyrosine");	
		}
	});

	console.log("Sequence traduite :\t", output_arr.join("-"));
}
