'use strict'

// variable declarations
let response;
let jsonData;

// function definitions
function parseJSON(jsonToParse) {
  let firstName = document.createElement('li');
  let lastName = document.createElement('li');
  let phoneNum = document.createElement('li');
  let emailAddr = document.createElement('li');

  firstName.innerText = `First name:    ${jsonToParse.results[0].name.first}`;
  lastName.innerText = `Last name:      ${jsonToParse.results[0].name.last}`;
  phoneNum.innerText = `Phone Number:   ${jsonToParse.results[0].phone}`;
  emailAddr.innerText = `Email Address: ${jsonToParse.results[0].email}`;
  // add the DOM attributes to the body
  let browserAPI = document.getElementById('browserFetched');
  browserAPI.appendChild(firstName);
  browserAPI.appendChild(lastName);
  browserAPI.appendChild(phoneNum);
  browserAPI.appendChild(emailAddr);
}

async function fetchRandomUserData() {
  console.log("Fetching data...");
  response = await fetch("https://randomuser.me/api/");
  jsonData = await response.json();
  requestCounter();
  console.log(jsonData);
  parseJSON(jsonData)
}

const expressAPI = async() => {
  const response = await fetch('http://localhost:3000/randomPerson');

  let data = await response.json();

  data = data.data;

  let apiFirstName = document.createElement('li');
  let apiLastName = document.createElement('li');
  let apiPhoneNum = document.createElement('li');
  let apiEmailAddr = document.createElement('li');

  apiFirstName.innerText = `First name:    ${data.results[0].name.first}`;
  apiLastName.innerText = `Last name:      ${data.results[0].name.last}`;
  apiPhoneNum.innerText = `Phone Number:   ${data.results[0].phone}`;
  apiEmailAddr.innerText = `Email Address: ${data.results[0].email}`;

  let fetchAPIBody = document.getElementById('expressFetched');
  fetchAPIBody.appendChild(apiFirstName);
  fetchAPIBody.appendChild(apiLastName);
  fetchAPIBody.appendChild(apiPhoneNum);
  fetchAPIBody.appendChild(apiEmailAddr);
}
