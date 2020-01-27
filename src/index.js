function Person() {
  this.age = 26;
  this.tellAge = function() {
    console.log(this.age);
  };
}

var emp01 = new Person();
emp01.tellAge();

const transportation = {
  name: "Bus",
  make: "Benz",
  tellDetails: function() {
    console.log(`This ${this.name} is build by ${this.make}`);
  }
};

const seats = Object.create(transportation);
seats.tellDetails();
