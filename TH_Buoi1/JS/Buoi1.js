// Coding challenge 1 & 2
console.log("Coding challenge 1 & 2-----------------");

function calculateBMI(mass, height) {
  return mass / height ** 2;
}

const Markmass = 78;
const Markheight = 1.69;
const Johnmass = 95;
const Johnheight = 1.88;

const MarkBMI = calculateBMI(Markmass, Markheight);
const JohnBMI = calculateBMI(Johnmass, Johnheight);

const markHigherBMI = MarkBMI > JohnBMI;

const message = `Mark BMI (${MarkBMI}) is higher than John (${JohnBMI})!`;

console.log("BMI Mark: ", MarkBMI);
console.log("BMI John: ", JohnBMI);
console.log(markHigherBMI);
console.log(message);

// Coding challenge 3
console.log("Coding challenge 3 ------------------");
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const dolphinsAverageScore =
  dolphinsScores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0) / dolphinsScores.length;

const koalasAverageScore =
  koalasScores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0) / koalasScores.length;

let winner;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  winner = "Dolphins";
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  winner = "Koalas";
} else {
  winner = "Draw";
}
console.log(`The winner is ${winner}`);

// Coding challenge 4
console.log("Coding challenge 4 ------------------");
const billValue = 275;
const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
const totalValue = billValue + tip;
const message1 = `The bill was ${billValue}, the tip was ${tip}, and the total value was ${totalValue}`;
console.log(message1);

// Coding challenge 5
console.log("Coding challenge 5 ------------------");
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const dolphinsAverageScore1 = calcAverage(...dolphinsScores);
const koalasAverageScore1 = calcAverage(...koalasScores);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins * 2 >= avgKoalas) {
    console.log(`Dolphins win (20 vs. 10)}`);
  } else if (avgKoalas * 2 >= avgDolhins) {
    console.log(`Koalas win (20 vs. 10)}`);
  } else {
    console.log(`No winner`);
  }
};
checkWinner(dolphinsAverageScore1, koalasAverageScore1);