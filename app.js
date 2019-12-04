
//variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overLay = document.getElementById('overlay');
const startGameButton = document.querySelector('.btn__reset')
const triesList = document.getElementsByClassName('tries');
//arrays
const gamePhrases = ['Just do it', 
					'All or nothing', 
					'Pedal to the metal',
					'Fight like a man',
					'Be your own man' ];






startGameButton.addEventListener('click', () => {

	if (startGameButton.textContent === 'Start Game'){
		overLay.style.display = 'none';
		}
		else if (startGameButton.textContent === 'Reset Game') {
			window.location.reload();

		}
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
Create a checkLetter function.
The checkLetter function will be used inside of the event listener 
This function should have one parameter: the button the player has 
clicked when guessing a letter.

The checkLetter function should get all of the
elements with a class of “letter” 

The function should loop over the letters and check if they match the 
letter in the button the player has chosen.

If there’s a match, the function should add the “show” class to the list item
containing that letter, store the matching letter inside of a variable, and return that letter

If a match wasn’t found, the function should return null

return match
***/
function checkLetter(button) {                
	
	const liList = document.querySelectorAll('.letter');
	let match = null;
	
		for (let i = 0; i < liList.length; i += 1) {
		
			if (liList[i].textContent.toUpperCase() == button.toUpperCase()) {
				liList[i].classList.add('show');
				match = button;
			}
		}
			return match;
};



/**
Create a checkWin function.
Each time the player guesses a letter, this function will check whether the game 
has been won or lost. At the very end of the keyboard event listener, you’ll run 
this function to check if the number of letters with class “show” is equal to the 
number of letters with class “letters”. If they’re equal, show the overlay screen 
with the “win” class and appropriate text. Otherwise, if the number of misses is 
equal to or greater than 5, show the overlay screen with the “lose” class and 
appropriate text.
**/

function checkWin() {
/**if the number of letters with class “show” is equal to the 
number of letters with class “letters”
**/
	const rightGuess = document.querySelectorAll('.show');
	const rightAnswer = document.querySelectorAll('.letter')
	const button = document.getElementById('qwerty')
	const phrase = document.getElementById('phrase')
	const ul = document.getElementsByTagName('ul');
	const li = document.getElementsByTagName('li');


	if(rightGuess.length === rightAnswer.length){


		overLay.classList.replace('start', 'win');
		overLay.style.display = 'flex';
		overlay.firstElementChild.textContent='You Win!';
		startGameButton.textContent='Reset Game';
		
		ul.removeChild.li;


	}
	else if (missed >= 5){

		overLay.classList.replace('start', 'lose');
		overLay.style.display = 'flex';
		overlay.firstElementChild.textContent='You Lose!';
		startGameButton.textContent='Reset Game';
    	
	}
	

	

};




/**
Add an event listener to the keyboard.

Use event delegation to listen only to button events from the keyboard. 

When a player chooses a letter, add the “chosen” class to that button so
the same letter can’t be chosen twice. 

Note that button elements have an
attribute you can set called “disabled” that when set to true will not 
respond to user clicks.

Pass the button to the checkLetter function, and store the letter returned 
inside of a variable called 'clickbutton'. 

At this point, you can open the 
index.html file, click any of the letters on the keyboard, and start to see 
the letters appear in the phrase.
**/

const button = document.getElementsByTagName('button');
qwerty.addEventListener('click', (event) => {

	
		const clickButton = event.target;

			if (clickButton.tagName == 'BUTTON') {
		
							
					clickButton.className = 'chosen';
					clickButton.setAttribute("disabled", true);
									
					
					if (checkLetter(clickButton.textContent) === null)	{ 

						missed += 1;

						let li = document.querySelectorAll("img");
						
           				if(li.length > 0){
              			  //removing child/img 
               			  // removeChild 
                			li[li.length - missed].src = 'images/lostHeart.png';	
                		}	


					  }			//console.log(playerGuess);
					
					  
					checkWin()
				}	
			
		});


	
/*****
Count the missed guesses in the game.

If the checkLetter function returns a null value, the player has 
guessed the wrong letter. 

In the keyboard event listener, after checkLetter is called, 
write a statement to check the value of the letterFound(clickButton) variable. 

If the value is null, 
remove one of the tries from the scoreboard. 

If you haven't created it yet, make sure
you have a missed variable to store the state of the scoreboard (initialized to 0).

 When you remove a try from the scoreboard, make sure to increase the missed count by 1.
 *****/













