let attempt = 3;
let min = 0;
let max = 8;
let prize = 0;
let startMaxPrize = 100;
let nextMaxprize = 100;
const startRange = 8;
const index = 2;
const rangeIndex = 4;
const startAttempt = 3;
const defaultPrize = 100;

if (confirm('Do you want to play a game?')) {
    while (attempt > 0) {

        let random = Math.floor(Math.random() * (max - min + 1)) + min;

        let choise = parseInt(prompt(`Choose a roulette pocket number from 0 to ${max}
        					Attempts left: ${attempt}
					        Total prize: ${prize}$
					        Possible prize on current attempt: ${startMaxPrize}$
					        `));

        if (choise === random) {
            prize += startMaxPrize;
            if (confirm(`Congratulation, you won!
        			Your prize is: ${prize}$.
        			Do you want to continue?`)) {
                nextMaxprize *= index;
                startMaxPrize = nextMaxprize;
                attempt = startAttempt;
                max += rangeIndex;
                continue;
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize} $`);
                if (confirm('Do you want to play again?')) {
                    attempt = startAttempt;
                    prize = 0;
                    startMaxPrize = defaultPrize;
                    max = startRange;
                    continue;
                }
            }

        } else {
            attempt--;
            startMaxPrize /= index;
            if (attempt === 0) {
                alert(`Thank you for your participation. Your prize is: ${prize} $`);
                if (confirm('Do you want to play again?')) {
                    attempt = startAttempt;
                    prize = 0;
                    startMaxPrize = defaultPrize;
                    max = startRange;
                    continue;
                }
            }
        }
    }

} else {
    alert('You did not become a billionaire, but can.');
}