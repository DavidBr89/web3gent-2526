import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Test from "./components/Test";
import Header from "./components/Header";
import MyButton from "./components/MyButton";

type ID = number | string;
type WebType = "Web 1" | "Web 2" | "Web 3";

type Person = {
  fName: string;
  lName: string;
  age: number;
  hasCar?: boolean;
};

type Student = Person & {
  studentNumber: string;
};

interface IStudent extends Person {
  studentNumber: string;
}

function App() {
  let title: WebType = "Web 3";
  const id: ID = 3;

  const student: IStudent = {
    fName: "John",
    lName: "Doe",
    age: 23,
    studentNumber: "dr242r523r234ff",
  };

  title = "Web 2";

  const students: Array<Student> = [];

  students.push(5);

  console.log(title);

  return (
    <>
      <Header />
      <MyButton
        onClick={(event) => {
          // console.log(event.);
          alert(`Vanuit de APP.TSX:  ${event.target}`);
        }}>
        Verstuur
      </MyButton>
      {/* <a onClick={(event) => event.preventDefault()} href="https://google.be">
        Google
      </a> */}
    </>
  );
}

export default App;
