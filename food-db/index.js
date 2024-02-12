// let highestPricePerOunce = 0;
// let highestProduct = "";

// let leastPricePerOunce = 100000;
// let leastProduct = "";

// let total = 0;

function searchProducts(searchTerm, database) {
	const results = [];

	for (const url in database) {
		for (const subURL in database[url]) {
			for (const product in database[url][subURL]) {
				const description = database[url][subURL][product]["description"];
				const relevance = calculateRelevance(product, description, searchTerm);

				// if (database[url][subURL][product]["pricePerOunce"] > highestPricePerOunce) {
				// 	highestPricePerOunce = database[url][subURL][product]["pricePerOunce"];
				// 	highestProduct = product;
				// }

				// if (database[url][subURL][product]["pricePerOunce"] < leastPricePerOunce) {
				// 	leastPricePerOunce = database[url][subURL][product]["pricePerOunce"];
				// 	leastProduct = product;
				// }

				// total += 1

				results.push({
					product,
					relevance,
					description,
					pricePerOunce: database[url][subURL][product]["pricePerOunce"]
				});
			}
		}
	}

	// console.log(total)

	// console.log(highestPricePerOunce, highestProduct);
	// console.log(leastPricePerOunce, leastProduct);

	// Sort results by relevance in descending order
	results.sort((a, b) => b.relevance - a.relevance);

	// Return the top 3 results
	return results.slice(0, 5);
}

function calculateRelevance(product, description, searchTerm) {
	// Simple relevance calculation based on the number of occurrences of the searchTerm in the description
	const regex = new RegExp(searchTerm, "gi");
	let matches = ((product.replace(/-/g, "") + product.replace(/-/g, " ")).match(regex) || []).length;

	if (matches > 0) {
		// The closer the title is to the search term, the higher the relevance
		matches = matches / product.length;
	}

	return matches;
}

function capitalizeAndSpace(str) {
	// Split the string at each hyphen
	let words = str.split("-");

	// Capitalize the first letter of each word
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}

	// Join the words back together with a space
	return words.join(" ");
}

let database = {};
const inputBox = document.querySelector("#inputBox");
const results = document.querySelector("#results");

inputBox.addEventListener("input", async (e) => {
	results.innerHTML = "";

	if (Object.keys(database).length == 0) {
		database = await fetch("./db.json").then((response) => response.json());
	}

	const searchTerm = e.target.value;
	const searchResults = searchProducts(searchTerm, database);

	for (const searchResult in searchResults) {
		if (searchResults[searchResult].relevance == 0) continue;

		const product = searchResults[searchResult].product;
		const description = searchResults[searchResult].description;
		const pricePerOunce = searchResults[searchResult].pricePerOunce;

		// create a div box that displays these three properties
		const productBox = document.createElement("div");
		productBox.innerHTML = `
			<div class="bg-gray-200 p-4 rounded-lg shadow-lg">
				<h3 class="text-lg font-bold">${capitalizeAndSpace(product)}</h3>
				<p>Description: ${description}</p>
				<p class="font-bold">Price per Ounce: $${pricePerOunce}</p>
			</div>
		`;

		results.append(productBox);
	}
});
