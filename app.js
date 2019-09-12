
//variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = '';
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

	for (let i = 0; i < button.length; i += 1){
		const clickButton = button[i].textContent;

		if (event.target.tagName == 'BUTTON') {
		
			if (button[i] == event.target){
				
					button[i].className = 'chosen';
					button[i].setAttribute("disabled", true);
				
					
					checkLetter(clickButton);

					if (checkLetter(clickButton) === null)	{ 

						missed += 1;
						let li = document.querySelectorAll("img");
						
           				if(li.length>0){
              			  //removing child/img 
               			  // removeChild 
                			li.removeChild(li[0]);	
                		}		
					  }			//console.log(playerGuess);
					}	
				}	
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













