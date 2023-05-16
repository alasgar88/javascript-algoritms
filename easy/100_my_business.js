const cumulativeRevenue = (carPrice, monthlyPayment, time, initialCars) => {
  let moneyForNewCar = 0;
  let carsInformation = { car1: 36 };
  let days = 0;

  for (let i = 1; i <= time * 30; i++) {
    // cummulate month
    days += 1;
    // get total cars
    let totalCars = Object.values(carsInformation).filter(
      (value) => value !== 0
    ).length;
    console.log(totalCars, 'totalCars');
    moneyForNewCar += monthlyPayment * totalCars;

    // minus one month for each car
    if (days === 30) {
      days = 0;
      for (let prop in carsInformation) {
        if (carsInformation[prop] === 0) {
          delete carsInformation[prop];
        }
        carsInformation[prop] = carsInformation[prop] - 1;
      }
    }
    // if we have enough money buy new cars
    if (moneyForNewCar === carPrice) {
      carsInformation[`car${totalCars + 1}`] = 36;
      moneyForNewCar = 0;
    }

    // delete car that expired
    // const checkExpiredCars = Object.entries(carsInformation);
    // console.log(checkExpiredCars);
  }
  const potentialRevenue = Object.values(carsInformation).reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue * 30 * 25;
    },
    0
  );
  console.log(potentialRevenue, 'potentialRevenue');
  return { balance: moneyForNewCar, carsInformation, potentialRevenue };
};

console.log(cumulativeRevenue(13500, 25, 36, 1));
