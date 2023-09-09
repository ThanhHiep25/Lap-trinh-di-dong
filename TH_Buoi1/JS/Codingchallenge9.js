console.log("Coding challenge 9 ------------------");

const printForecast = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const temperature = arr[i];
      const days = i + 1;
  
      console.log(`... ${temperature}oC in ${days} days ...`);
    }
  };
  
  const arr1 = [17, 21, 23];
  const arr2 = [12, 5, -5, 0, 4];
  
  printForecast(arr1);
  printForecast(arr2);