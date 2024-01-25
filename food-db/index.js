function searchProducts(searchTerm, database) {
	const results = [];

	for (const url in database) {
		for (const subURL in database[url]) {
			for (const product in database[url][subURL]) {
				const description = database[url][subURL][product]["description"];
				const relevance = calculateRelevance(product, description, searchTerm);

				results.push({
					product,
					relevance,
					description,
					pricePerOunce: database[url][subURL][product]["pricePerOunce"],
				});
			}
		}
	}

	// Sort results by relevance in descending order
	results.sort((a, b) => b.relevance - a.relevance);

	// Return the top 3 results
	return results.slice(0, 5);
}

function calculateRelevance(product, description, searchTerm) {
	// Simple relevance calculation based on the number of occurrences of the searchTerm in the description
	const regex = new RegExp(searchTerm, "gi");
	const matches = ((product + " " + description).match(regex) || []).length;
	return matches;
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
		productBox.classList = "bg-slate-400 p-4 shadow-lg m-2 rounded-lg";
		productBox.innerHTML = `
                <h3 class="font-bold">${product}</h3>
                <p>Description: ${description}</p>
                <p class="font-bold" >Price per Ounce: $${pricePerOunce}</p>
            `;

		results.append(productBox);
	}
});
