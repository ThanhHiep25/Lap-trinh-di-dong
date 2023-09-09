console.log("Coding challenge 8 ------------------");
const testBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const testTips = [];
const testTotals = [];

for (let i = 0; i < testBills.length; i++) {
  const billValue = testBills[i];
  const tip = calcTip(billValue);
  const total = billValue + tip;

  testTips.push(tip);
  testTotals.push(total);
}

const calculateAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

const average = calculateAverage(testTotals);

console.log("The average tip is " + average);