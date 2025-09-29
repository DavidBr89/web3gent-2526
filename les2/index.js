console.log("Hallo vanuit Web 3");

// const firstName = "David";

const student = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "Valentin",
    postalCode: 9000,
  },
};

// Destructuring
const {
  firstName: studentFirstName,
  address: { street },
  address,
} = student;

console.log(street);

console.log(address);

// Promises
// JS object    -> Producing code --> code dat eventjes duurt
//              -> Consuming code -> code waarop we eventjes moeten wachten

// Drie toestanden
// PENDING -> nog aan het wachten
// FULFILLED -> Succesvol -> resolve()
// REJECTED -> Fout -> reject()

const naivePromise = {
  then: function () {
    return this;
  },
  catch: () => {},
  finally: () => {},
};

// naivePromise.then().catch();

const myPromise = new Promise((resolve, reject) => {
  const isSuccess = false;

  if (isSuccess) {
    setTimeout(() => {
      resolve();
    }, 2000);
  } else {
    reject();
  }
});

// Consuming code
myPromise
  .then(() => {
    console.log("Promise fulfilled"); // 1
  })
  .catch(() => {
    console.log("Promise is rejected");
  });

console.log("Test na promise!"); // 2

// TODO: Promises
// Simulatie van pizzeria
// Promise voor het bereiden van de pizza - 4s - Deeg valt op de grond
// Promise voor het bakken van de pizza in de oven - 2s - Oven is kapot
// Promise voor het verpakken van die pizza - 1s - Dozen zijn op
// Promise voor het afrekenen van de pizza - 0s - Saldo ontoereikend
