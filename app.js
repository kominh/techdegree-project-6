
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
			//add the text/letter of phrases to li
			li.textContent = phrases[i]; 
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



function checkLetter(button) {
	
		
		const liList = document.querySelectorAll('letter');
		let match = null;
	//The function should loop over the letters and check if they match the 
    //letter in the button the player has chosen.
	for (let i = 0; i < liList.length; i += 1) {

			//If there’s a match, the function should add the “show” class to the list item
			//containing that letter, store the matching letter inside of a variable,
			//and return that letter.
			if (liList[i].textContent == button) {
					liList[i].className = 'show';
					
									
			}

			 //else {//If a match wasn’t found, the function should return null.	
			return match;		// }	
		} 
};


	const button = document.getElementsByTagName('button');
	qwerty.addEventListener('click', (event) => {

		

		for (let i = 0; i < button.length; i += 1){
			
			if (event.target.tagName == 'BUTTON') {
				let playerGuess = event.target.innerText;
				
						
				//console.log(playerGuess);
					}

				if (button[i] == event.target){
					button[i].className = 'chosen';
					button[i].setAttribute("disabled", true);
					checkLetter(button);
					const letterFound = checkLetter(button);
					}		
			

			}	


			
			
		});

	
////////////
/**
Add an event listener to the keyboard.



Use event delegation to listen only to button events from the keyboard. 

When a player chooses a letter, add the “chosen” class to that button so
 the same letter can’t be chosen twice. Note that button elements have an
  attribute you can set called “disabled” that when set to true will not 
  respond to user clicks. See the MDN documentation for more details.

Pass the button to the checkLetter function, and store the letter returned 
inside of a variable called letterFound. At this point, you can open the 
index.html file, click any of the letters on the keyboard, and start to see 
the letters appear in the phrase.

**/




//listen for user actions or events
//example








