const processArray = require("./processArray");
//const negative = require('./negative');
let sam = 0;
function calculateCommission(saleValues) {
  let x = 0;
  let y = 0;
  let isFirstEntry = true;

  let array = [];
  let negativeTotal = 0;
  var v = 0;
  let sam = saleValues[0]
  for (let i = 0; i < saleValues.length; i++) {
    sam = sam + saleValues[i];
    if (saleValues[i] < 0) {
      array.push(saleValues[i]);
    //  console.log(array[array.length - 1]);
      y = y + array[array.length - 1];
      if (array[array.length - 1] > -150) {
        negativeTotal = negativeTotal + array[array.length - 1] * 10;
      } else {
        negativeTotal = negativeTotal + (10 * array[array.length - 1] - 500);
      }
    }
  }
  console.log('before negative', saleValues)
  saleValues = negative(saleValues);
 // saleValues = negative(saleValues);
  function negative(array) {
    const negatives = array.filter(value => value < 0);
    const nonNegatives = array.filter(value => value >= 0);
    return [...negatives, ...nonNegatives];
  }
  console.log('after negative', saleValues)
  
  //putting Here  to pass the saleValues
  if (sam > 3000) {
    console.log("inside sam")
    saleValues.push(-1);
    saleValues = processArray(saleValues);
  }
  
  //console.log(saleValues)
  // console.log(y, negativeTotal);
  const totalCommission = saleValues.reduce((total, sale) => {
    if (sale < 0) return total;

    if (isFirstEntry) {
      y = y + sale;
      isFirstEntry = false;
      if (sale < 150) {
        return total + sale * 10;
      } else {
        return total + (10 * sale + 500);
      }
    } else {
      if (y < 3000) {
        if (sale < 150) {
          y = y + sale;
          return total + sale * 10;
        } else {
          y = y + sale;
          return total + (10 * sale + 500);
        }
      } else if (y >= 3000 && y < 4000) {
        if (sale < 150) {
          y = y + sale;
          return total + sale * 20;
        } else {
          y = y + sale;
          return total + (20 * sale + 1000);
        }
      } else if (y >= 4000 && y < 5000) {
        if (sale < 150) {
          y = y + sale;
          return total + sale * 30;
        } else {
          y = y + sale;
          return total + (30 * sale + 1500);
        }
      } else if (y >= 5000 && y < 6000) {
        if (sale < 150) {
          y = y + sale;
          return total + sale * 40;
        } else {
          y = y + sale;
          return total + 40 * sale + 2000;
        }
      }
      else if (y >= 6000) {
        if (sale < 150) {
          y = y + sale;
          return total + sale * 50;
        } else {
          y = y + sale;
          return total + 50 * sale + 2500;
        }
      }
    }
  }, 0);

  return {
    y,
    totalCommission: totalCommission + negativeTotal,
  };
}

function calculateSalary(req, res) {
  const salesInput = req.body.salesInput;
  const saleValues = salesInput
    .replace(/[^-0-9\s]/g, "")
    .split(" ")
    .map(Number);

  const result = calculateCommission(saleValues);

 // console.log(saleValues)
  // Sending JSON response
  res.json(result);
}
module.exports = { calculateSalary };
