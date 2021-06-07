const LOSE = 0;
const WIN = 1;
let goal = 1000;
let cash = 200;
let bet = 100;
let winCount = 0;
let totalBet = 0;
while (cash < goal && cash > bet) {
    let spin = Math.floor(Math.random() * 10) % 2;
    switch (spin) {
        case LOSE:
            cash = cash - 200;
            break;
        case WIN:
            cash = cash + 200;
            winCount++;
            break;
    }
    totalBet++;
}
console.log("Total Bets: ", +totalBet);
console.log("Total Win: " + winCount);
console.log("balance: " + cash);