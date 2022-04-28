import React, { useState } from "react";
import "./bmi.css";
export const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const calculateBMI = (weight, height) => {
    height = height / 100;

    const bmi = weight / (height * height);
    return isNaN(bmi) ? 0 : bmi;
  };
  const handleClick = () => {
    setBMI(calculateBMI(weight, height));
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "height") {
      setHeight(value);
    }
    if (name === "weight") {
      setWeight(value);
    }
  };
  return (
    <div>
      <h1>BMI </h1>
      <div className="flex">
        <div>
          <span>Enter your weight (kg): </span>
          <input type="text" name="weight" onChange={onChangeHandler}></input>
        </div>
        <div>
          <span>Enter your height (cm): </span>
          <input type="text" name="height" onChange={onChangeHandler}></input>
        </div>
        <div>
          <button onClick={handleClick}>Click here</button>
        </div>
        <div>Your BMI is : {bmi}</div>
      </div>
    </div>
  );
};
