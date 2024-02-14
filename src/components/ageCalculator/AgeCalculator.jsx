import { useState } from "react";
import "../../style.css";

const AgeCalculator = () => {
  const [info, setInfo] = useState({
    date: "",
    month: "",
    year: "",
  });

  const [age, setAge] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const birthDate = new Date(`${info.year}-${info.month}-${info.date}`);
    const presentDate = new Date("2027-May-27");
    let days = presentDate.getDate() - birthDate.getDate();
    let months = presentDate.getMonth() - birthDate.getMonth();
    let years = presentDate.getFullYear() - birthDate.getFullYear();
    if (days < 0) {
      months -= 1;
      days += month[presentDate.getMonth()];
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge(`${years} years, ${months} months, and ${days} days`);
    // empty text fields when user pressed submit button
    // setInfo({
    //   date: "",
    //   month: "",
    //   year: "",
    // });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "220px",
          border: "1px solid black",
          padding: "24px",
        }}
      >
        <div className="age-calc-wrapper">
          <div className="age-calc-input">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={info.date}
              placeholder="Enter"
              onChange={handleInput}
            />
          </div>
          <div className="age-calc-input">
            <label>Month</label>
            <input
              type="text"
              name="month"
              value={info.month}
              placeholder="Enter"
              onChange={handleInput}
            />
          </div>
          <div className="age-calc-input">
            <label>Year</label>
            <input
              type="text"
              name="year"
              value={info.year}
              placeholder="Enter"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="age-calc-button-wrapper">
          <button className="age-calc-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="age-calc-text-wrapper">
          <p>{age && `Your Age is ${age}`}</p>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
