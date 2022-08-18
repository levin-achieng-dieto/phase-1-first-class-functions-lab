// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(a,b){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(a,b){
  return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(valueMultiplier){
  return function(fareMultiplier){
    return valueMultiplier * fareMultiplier;
  }
  }


  const fareDoubler = createFareMultiplier(2)
  createFareMultiplier()

  const fareTripler = createFareMultiplier(3)


  function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
  }

  
