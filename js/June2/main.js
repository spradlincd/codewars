// 06/02/2022
// 5kyu Pete, the Baker

function cakes(recipe, available) {
    // default possible is -1 - indicating an error
    let min = -1;
  
    // IF there are more properties in the recipe than in the available, return 0
    if (Object.keys(recipe).length > Object.keys(available).length) return 0;
    
    // ELSE
    // match each property of the first object by name, then divide the number (Math.floor) to get the number possible from this item
    // do this for each item in the recipe - ignore extra items
    let temp = 0;
    for (let rItem in recipe) {
      for (let aItem in available) {
        // if the property name in the recipe is equal to the property name in available
        if (rItem === aItem) {
          temp = Math.floor(available[aItem] / recipe[rItem]);
          // if min is still flagged as not used, temp is the current minimum
          if (min === -1) min = temp;
          // otherwise, check to see if temp is the smaller number and if so, then make it the current minimum
          else if (temp < min) min = temp;
        }
      }
    }
  
    // return the result
    return min;
  }
  // must return 2
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
  // must return 0
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 