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

const preparePromise = new Promise((resolve, reject) => {
  const isError = false;

  setTimeout(() => {
    if (isError) {
      reject("Fout");
    }
    resolve("Succesvol bereiding");
  }, 4000);
});

const bakePromise = new Promise((resolve, reject) => {
  const isError = false;

  setTimeout(() => {
    if (isError) {
      reject("Fout");
    }
    resolve("Succesvol bakken");
  }, 2000);
});

const packingPromise = new Promise((resolve, reject) => {
  const isError = false;

  setTimeout(() => {
    if (isError) {
      reject("Fout");
    }
    resolve("Succesvol verpakking");
  }, 1000);
});

const payPromise = new Promise((resolve, reject) => {
  const isError = false;

  setTimeout(() => {
    if (isError) {
      reject("Fout");
    }
    resolve("Succesvol betaling");
  }, 0);
});

// // 1
// preparePromise
//   .then((data) => {
//     console.log(data);
//     bakePromise
//       .then((data) => {
//         console.log(data);
//         packingPromise
//           .then((data) => {
//             console.log(data);
//             payPromise
//               .then((data) => {
//                 console.log(data);
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

preparePromise.catch((err) => {
  console.log(err);
});

preparePromise.then(() => {});

Promise.all([preparePromise, bakePromise, packingPromise, payPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const preparePizza = async () => {
  try {
    const result = await preparePromise;
    const resultBaking = await bakePromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

preparePizza();
