let gretter = (myArray, counter) => {
    let greetText = 'Hello ';

   for (const name of myArray){
    console.log(`${greetText}${name}`);
   }


};

gretter(['Ranndy Savage', 'Ric Flair', 'Hulk Hogan'],3);



const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));



const colors = ['red', 'green', 'blue'];


const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors); 


var values = [1, 60, 34, 30, 20, 5];


const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20); 


var array = [1, 2, 3, 4];


const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum);     
console.log(calculateProduct);  


class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
   
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  

  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year); 
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details()); 
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info()); 
  


