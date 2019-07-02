//2nd question
function getRandom() {
    return Math.random();
  }
  console.log(Math.random());

//3rd question
var min=4; 
var max=5;  
var random = Math.random() * (+max - +min) + +min; 
console.log( random )

// 4th question
function getDayString(num) {
    var day;
    switch (num) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid day";
    }
    return day;
}

theDate = new Date();

console.log("Today is ", getDayString(theDate.getDay()+1));

 // 5th question
var text = "Hello";

switch (text) {
    case "Hello 1":
        console.log("Hello 1");
        break;

    case "Hello 2":
        console.log("Hello 2 ");
        break;

    case "Hello":
        console.log("Correct Text Hello ");
        break;

    default:
        console.log("This is default selection");
        break;
}

//6th question
function calculateTaxes(price, quantity) {
  var salesTax = 10;
  var totalPrice = (price * quantity) * (1 + salesTax);
  return totalPrice;
}

console.log(calculateTaxes(1,1));
