console.log("Coding challenge 7 ------------------");

const mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
};

const john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
};

const calcBMI = (person) => {
  const bmi = person.mass / person.height ** 2;
  person.bmi = bmi;
  return bmi;
};

const markBMI = calcBMI(mark);
const johnBMI = calcBMI(john);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}
