let car = {
  brand: "Toyota",       // property 
  model: 2024,           // property
  color: "Red",          // property
  start: function() {    // method
    console.log("Car started!");
  },
  stop: function() {     // method
    console.log("Car stopped!");
  }
};

// properties
console.log(car.brand); 
console.log(car.model);

// methods
car.start(); 
car.stop();  
