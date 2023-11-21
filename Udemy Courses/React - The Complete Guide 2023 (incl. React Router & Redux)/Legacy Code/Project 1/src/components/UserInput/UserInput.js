import { useState } from "react";
import classes from "./UserInput.module.css";
const UserInput = (props) => {
  const initalUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  }
  const [formDetails, setFormDetails] = useState(initalUserInput);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmission(formDetails);
  };
  const resetHandler = () => {
    setFormDetails(initalUserInput);
  }
  const inputChangeHandler = (inputId, value) => {
    setFormDetails((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +value,
      }
    });
  }
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formDetails['current-savings']}
            onChange={(event) => inputChangeHandler("current-savings", event.target.value)} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formDetails['yearly-contribution']}
            onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formDetails['expected-return']}
            onChange={(event) => inputChangeHandler("expected-return", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formDetails['duration']}
            onChange={(event) => inputChangeHandler("duration", event.target.value)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;