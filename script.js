const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const allFruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = allFruit.filter((fruit) =>  fruit.toLowerCase().includes(str.toLowerCase()));
	//first it filters if any of the fruits contains the str of chars
	//then it gets all the fruits and sets it equal to an array

	return results;
	//returns the fruits array with fruits that share this str
}
//each time it will update new array of fruit that contains the str
function searchHandler(e) {
	
	let fruits = search(e.target.value);
	//sets a new array of fruits to the str
	showSuggestions(fruits, e.target.value);
	//shows new suggestions 
}

//
function showSuggestions(results, inputVal) {
	//before everything, it makes sure to reset the suggestions
	suggestions.innerHTML = "";

	results.map((fruit)=> {
		let li = document.createElement('li');
		li.innerText= fruit;
		suggestions.appendChild(li);
}) //creates new lis for the ul called suggestions
	
}
//when you click the fruit, it will appear in the textbox and the rest suggestions dissappear
function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML= "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);





const suggestionsList = document.querySelector('.suggestions');
input.addEventListener('input', function() {
    const inputValue = input.value.trim();
    if (inputValue.length > 0) {
        suggestionsList.style.display = 'block'; 
		// Show suggestions
    } else {
        suggestionsList.style.display = 'none'; 
		// Hide suggestions
    }
});

// Hide suggestions initially
suggestionsList.style.display = 'none';
