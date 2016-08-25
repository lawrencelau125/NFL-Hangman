var secretWord = ["d", "u", "m", "p", "l", "i", "n", "g"];

		var missedGuesses = 0;

		document.onkeyup = function(event) {
			var key = String.fromCharCode(event.keyCode).toLowerCase();

			if ((key == 'd') || (key == 'u') || (key == 'm') || (key == 'p') || (key == 'l') || (key == 'i') 	|| (key == 'n') || (key == 'g')){

				// if ((key == 'd') && (secretWord = 'd')){
				// 	match++;
				// 	}


				if (key !== secretWord) {
					missedGuesses++;
				}



				var html = "<p>Guess a letter to start!</p>" +
				"<p>Missed Guesses: " + 
				missedGuesses + 
				"</p>";

				// Placing the html into the game ID
				document.querySelector('#game').innerHTML = html;

			}

		}