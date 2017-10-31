// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
                                return function(num) {
                                  return num * fare;
                                };
                              };

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, array) {
  return array(drivers)
}
