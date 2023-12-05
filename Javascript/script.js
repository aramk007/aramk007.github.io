console.log("hello");
// declare variable
let x = 4;
// conditional statement, using comparison operator
if (x == 4) {
    console.log('goodbye');
}
// decalre Arrays
let products = ["tshirt", "hat", "jacket", "shoes"]
console.log(products);
// console log with index
console.log(products[2]);
// Objects have key-value pairs
let data = { product: "tshirt", price: 5.20 }
console.log(data);
console.log(data.price);
// new array of objects
let fallcatelog = [{ product: "tshirt", price: 5.20 }, { product: "shoes", price: 8.20 }]
console.log(fallcatelog);
console.log(fallcatelog[1].price);
// Method getElementById
let productsDiv = document.getElementById("products");
console.log(productsDiv);
// .textContent property
productsDiv.textContent = (fallcatelog[0].product);

let userName = 'Adam';
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

// User Question
let userQuestion = `Will I adopt a new puppy soon?`;
console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(`The random number is: ${randomNumber}`);

let eightBall = '';

// Assign responses based on the random number
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy, try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Yes, definitely';
    break;
  default:
    eightBall = 'Sorry, something went wrong';
}

console.log(`The magic eight ball says: ${eightBall}`);