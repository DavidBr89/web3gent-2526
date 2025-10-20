import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  //   let counter = 0;

  // TODO: Maak ook een favorieten state aan met en knop als hier op geklikt wordt worde de huidige counter waarde toegevoegd aan de favorieten array
  // Zorg voor een extra Favorites component waarbij deze favorieten getoond worden in <li> items met map
  // De favorites state blijft wel in de counter component staan en de favorites mag geen duplicates hebben

  const [counter, setCounter] = useState(0);

  console.log("Test rerender");

  return (
    <div>
      <p>{counter}</p>
      <MyButton
        subTitle="Min"
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}>
        -
      </MyButton>
      <MyButton
        subTitle="Plus"
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}>
        +
      </MyButton>
    </div>
  );
};

export default Counter;
