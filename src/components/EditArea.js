import React from "react";

export default function EditArea() {
  const [data, setData] = React.useState("Digitized Patient Intake Form");
  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="edit-area split-screen">
      <h1>Digitized Patient Intake Form</h1>
      <form>
        <ul className="form-list">
          <li>
            <label htmlFor="first-name">Patient Name</label>
            <input type="text" id="first-name" defaultValue={data["Patient name"]} />
          </li>
          <li>
            <label htmlFor="dob">Date of Birth</label>
            <input type="text" id="dob" defaultValue={data["Date of birth"]} />
          </li>
          <li>
            <label htmlFor="province">Marital Status</label>
            <input type="text" id="marriage" defaultValue={data["Marital status"]} />
          </li>
          <li>
            <label htmlFor="province">Country of Birth</label>
            <input type="text" id="cob" defaultValue={data["Country of birth"]} />
          </li>
          <li>
            <label htmlFor="province">Current Occupation</label>
            <input type="text" id="occupation" defaultValue={data["Current occupation"]} />
          </li>
          <li>
            <label htmlFor="province">Email Address</label>
            <input type="text" id="email" defaultValue={data["Email address"]} />
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" defaultValue={data["Address"]} />
          </li>
          <li>
            <label htmlFor="city">City</label>
            <input type="text" id="city" defaultValue={data["City"]}
                  placeholder="Enter patient's city of residence" />
          </li>
          <li>
            <label htmlFor="province">Province</label>
            <input type="text" id="province" defaultValue={data["Province"]} />
          </li>

          <li>
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" id="phone-number" defaultValue={data["Phone #"]}
                    placeholder="Enter patient's phone number here" />
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
            <label htmlFor="diabetes-details">Family Memeber and Age at Diagnosis</label>
            <textarea rows="3" id="diabetes-details" placeholder="Family Details"></textarea>
          </li>
          <li>
            <button type="submit" class="btn btn-lightblue btn-animate">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
};
