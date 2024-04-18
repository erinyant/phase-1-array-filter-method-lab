// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, query) {
    if (drivers.length === 0) {
      return [] 
    // return empty if driver array empty
    }
  
    const matches = []
  
    for (const driver of drivers) {
      if (driver.startsWith(query)) {
        matches.push(driver);
      }
    }
    return matches
  }

function matchName(drivers, name) {
    const matchingDrivers = []
// create empty array to store matching driver objects
    drivers.forEach(driver => {
        if (driver.name === name) {
            matchingDrivers.push(driver)
        }
// for loop - iterate over driver objects in array
// check if name property matches provided string argument - if so, push to empty array
    })
    return matchingDrivers
}

