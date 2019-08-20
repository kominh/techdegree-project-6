
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




//function

const phrases = getRandomPhraseAsArray(gamePhrases);
function addPhraseToDisplay (arr) {
	
	for (i = 0; i < arr.length; i ++) {
		
		//create li element
		let ul = document.getElementsByTagName('ul')[0];
		let li = document.createElement('li');
		
		//set the li attributes
		li.setAttribute('class', 'letter');
		
		//set the element content value
		li.textContent = ('');
		
		//add li element
		ul.appendChild(li);
		
		//phrase is not an empty space
		if (phrases[i] !== ' ') {
			
			//apply the class 'letter' 
			li.className = 'letter';
			} 
			
			//else apply the class name... 'class'
			else {
				li.className = 'class';
			}
			
		}


}; 

addPhraseToDisplay(phrases);


