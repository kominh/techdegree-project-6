
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
		
		//add li element
		ul.appendChild(li);
		
		//if phrase is not an empty space
		if (phrases[i] !== ' ') {
			
			//apply the class 'letter' 
			li.className = 'letter';
			} 
			
			//else apply the class name... 'class'
			else {
				li.className = 'space';
			}
			
		}


}; 

addPhraseToDisplay(phrases);





/****
//Create a checkLetter function.
The checkLetter function will be used inside of the event listener 
//This function should have one parameter: the button the player has 
//clicked when guessing a letter.
//The checkLetter function should get all of the
//elements with a class of “letter” 
//(remember that we added the letter class to all of the letters and
// none of the spaces when we made the game display). 
***/
function checkLetter(playerGuess) {
	
	let liList = document.getElementsByClassName('letter');
	let noMatch = null;


	//The function should loop over the letters and check if they match the 
    //letter in the button the player has chosen.
	for (i = 0; i < liList.length; i ++) {

			//If there’s a match, the function should add the “show” class to the list item
			//containing that letter, store the matching letter inside of a variable,
			//and return that letter.
			if (liList.innerHTML.toUpperCase() == playerGuess.toUpperCase()) {
					liList.classList.add('show');

				
			}
			 else {//If a match wasn’t found, the function should return null.	
			 		return noMatch;
			 	
			 }	

};
console.log(checkLetter(playerGuess));





















