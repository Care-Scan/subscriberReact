import React, { useEffect } from "react";

export default function EditArea() {
<<<<<<< HEAD
  const [data, setData] = React.useState("Digitized Patient Intake Form");
  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
=======
  var jsonTextAnnotation = {};
  // props.data
  //   .slice(props.data.indexOf("Patient name"))
  //   .split("\n")
  //   .forEach(
  //     (key) => (jsonTextAnnotation[key.split(":")[0]] = key.split(":")[1])
  //   );
  // console.warn("jsonTextAnnotation", jsonTextAnnotation);

  var parsedData1;
  // fetching the GET route from the Express server
  const callBackendAPI = async () => {
    const response = await fetch("/data");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  callBackendAPI()
    .then((res) => {
      parsedData1 = res.parsedData;
      parsedData1
        .slice(parsedData1.indexOf("Patient name"))
        .split("\n")
        .forEach(
          (key) => (jsonTextAnnotation[key.split(":")[0].replace(/\s/g, '')] = key.split(":")[1])
        );
      console.warn("jsonTextAnnotation", jsonTextAnnotation);
    })
    .catch((err) => console.log(err));
>>>>>>> fe0bbecddfb4ec44cf25c55ab80be7a73fed4777

  return (
    <div className="edit-area split-screen">
      <h1>Digitized Patient Intake Form</h1>
      <form>
        <ul className="form-list">
          <li>
<<<<<<< HEAD
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
=======
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={jsonTextAnnotation["Patientname"]}
              //"ADIT" //{jsonTextAnnotation["Patient name"].split(" ")[1]}
            />
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder= {jsonTextAnnotation["Patient name"]} //"KRISHNAN" //{jsonTextAnnotation["Patient name"].split(" ")[2]}
            />
          </li>
          <li>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="text"
              id="dob"
              placeholder={jsonTextAnnotation["Date of birth"]}//"01/10/1999" //{jsonTextAnnotation["Date of Birth"]}
            />
          </li>
          <li>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              id="phone-number"
              placeholder="" //{jsonTextAnnotation["Phone"]}
            />
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="256 RAYMERVILLE DR" //{jsonTextAnnotation["Address"]}
            />
          </li>
          <li>
            <label htmlFor="unit">Unit / Suite Number</label>
            <input
              type="text"
              id="unit"
              placeholder="31" //{jsonTextAnnotation["Unit/Suite #"]}
            />
          </li>
          <li>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="" //{jsonTextAnnotation["City"]}
            />
>>>>>>> fe0bbecddfb4ec44cf25c55ab80be7a73fed4777
          </li>

          <li>
<<<<<<< HEAD
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" id="phone-number" defaultValue={data["Phone #"]}
                    placeholder="Enter patient's phone number here" />
=======
            <label htmlFor="province">Province</label>
            <input
              type="text"
              id="province"
              placeholder="ON" //{jsonTextAnnotation["Province"]}
            />
>>>>>>> fe0bbecddfb4ec44cf25c55ab80be7a73fed4777
          </li>
          <li>
            <label htmlFor="health-card-number">Health Card Number</label>
            <input
              type="text"
              id="health-card-number"
              placeholder="Enter patient's health card number here"
            />
          </li>
          <li>
            <label htmlFor="maritalStatus">Marital Status</label>
            <input
              type="text"
              id="maritalStatus"
              placeholder="SINGLE" //{jsonTextAnnotation["Marital status"]}
            />
          </li>
<<<<<<< HEAD

          <li>
            <label htmlFor="diabetes-details">Family Memeber and Age at Diagnosis</label>
            <textarea rows="3" id="diabetes-details" placeholder="Family Details"></textarea>
=======
          <li>
            <label htmlFor="cob">Country of Birth</label>
            <input
              type="text"
              id="cob"
              placeholder="CANADA" //{jsonTextAnnotation["Country of birth"]}
            />
          </li>
          <li>
            <label htmlFor="message">Medical Conditions</label>
            <textarea
              rows="6"
              id="medical-conditions"
              placeholder="Medical Conditions"
            ></textarea>
>>>>>>> fe0bbecddfb4ec44cf25c55ab80be7a73fed4777
          </li>
          <li>
            <button type="submit" class="btn btn-lightblue btn-animate">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
