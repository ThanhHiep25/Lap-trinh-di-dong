console.log("Coding challenge 6 ------------------");
const calcTip = (billValue) => {
    const tip = billValue >= 50 && billValue >= 300 ? billValue * 0.15 : billValue * 0.2
    return tip;
}

const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));
const totals = bills.map(bill => bill + tips[bills.indexOf(bill)]);
console.log("Tip: "+ tips);
console.log("totals: "+ totals);