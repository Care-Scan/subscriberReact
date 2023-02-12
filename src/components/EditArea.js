import React from "react";

export default function EditArea() {
  const [data, setData] = React.useState("state");
  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="edit-area split-screen">
      <h1>{data}</h1>
      <form>
        <ul className="form-list">
          <li>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="Enter patient's first name here" />
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Enter patient's last name here" />
          </li>
          <li>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" placeholder="Enter patient's date of birth here" />
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter patient's address here" />
          </li>
          <li>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Enter patient's city here" />
          </li>
          <li>
            <label htmlFor="province">Province</label>
            <input type="text" id="province" placeholder="Enter patient's province here" />
          </li>
          <li>
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" id="phone-number" placeholder="Enter patient's phone number here" />
          </li>
          <li>
            <label htmlFor="health-card-number">Health Card Number</label>
            <input type="text" id="health-card-number"
              placeholder="Enter patient's health card number here" />
          </li>
          <li>
            <label htmlFor="message">Medical Conditions</label>
            <textarea rows="6" id="medical-conditions" placeholder="Medical Conditions"></textarea>
          </li>
          <li>
            <label htmlFor="diabetes">Diabetes</label>
            {/* <select id="diabetes">
              <option value="" selected="selected"> </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select> */}
          </li>
          <li>
            <label htmlFor="diabetes-details">Family Memeber and Age at Diagnosis</label>
            <textarea rows="3" id="diabetes-details" placeholder="Diabetes Details"></textarea>
          </li>
          <li>
            <button type="submit" class="btn btn-lightblue btn-animate">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
};
