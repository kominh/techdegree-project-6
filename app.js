
//variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = '';
const overLay = document.getElementById('overlay');

//arrays
const gamePhrases = ['Just do it', 
					'All or nothing', 
					'Pedal to the metal',
					'Fight like a man',
					'Be your own man' ];






overlay.addEventListener('click', () => {

	overLay.style.display = 'none';
	});


//functions
//choose a random phrase from the phrases array
//split the array into new array of characters
//return new array of characters
//Math.floor(Math.random() * 5) + 1;
function getRandomPhraseAsArray (gamePhrases) {
 
randomPhrase = gamePhrases[(Math.floor(Math.random() * gamePhrases.length))];
newPhrase = randomPhrase.split('');
return newPhrase
};
console.log(getRandomPhraseAsArray(gamePhrases));



//function
function addPhraseToDisplay () {
	let phrase = getRandomPhraseAsArray(gamePhrases);
	for (i = 0; i < phrase.length; i ++) {
		
		//create li element
		let li = document.createElement('li');
		//add li element
		li.appendChild(document.createTextNode(phrase[i]));

		}

};
console.log(addPhraseToDisplay());



