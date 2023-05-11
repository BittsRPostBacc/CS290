'use strict'

import { json } from "express";

// import modules from sever.mjs


// variable declarations
let randomUserDetails = document.createElement('ul');
let response;
let jsonData;

// function definitions
function parseJSON(jsonToParse) {
  let firstName = document.createElement('p');
  let lastName = document.createElement('p');
  let phoneNum = document.createElement('p');
  let emailAddr = document.createElement('p');

  firstName.innerText = `First name:    ${jsonToParse.results[0].name.first}`;
  lastName.innerText = `Last name:      ${jsonToParse.results[0].name.last}`;
  phoneNum.innerText = `Phone Number:   ${jsonToParse.results[0].phone}`;
  emailAddr.innerText = `Email Address: ${jsonToParse.results[0].email}`;

  // get the body of the page where data can be displayed
  let browserAPIBody = document.getElementsByTagName('body')[0];

  // add the DOM attributes to the body
  browserAPIBody.appendChild(firstName);
  browserAPIBody.appendChild(lastName);
  browserAPIBody.appendChild(phoneNum);
  browserAPIBody.appendChild(emailAddr);
  console.log(`First: ${firstName}`)
  console.log(`Last: ${lastName}`)
  console.log(`Phone: ${phoneNum}`)
  console.log(`Email: ${emailAddr}`)
}

async function fetchRandomUserData() {
  console.log("Fetching data...");
  response = await fetch("https://randomuser.me/api/");
  jsonData = await response.json();
  console.log(jsonData);
  parseJSON(jsonData)
}

const expressAPI = async() => {
  const response = await fetch('http://localhost:3000/randomPerson');

  let data = await response.json();

  data = data.data;

  let apiFirstName = document.createElement('p');
  let apiLastName = document.createElement('p');
  let apiPhoneNum = document.createElement('p');
  let apiEmailAddr = document.createElement('p');

  apiFirstName.innerText = `First name:    ${jsonToParse.results[0].name.first}`;
  apiLastName.innerText = `Last name:      ${jsonToParse.results[0].name.last}`;
  apiPhoneNum.innerText = `Phone Number:   ${jsonToParse.results[0].phone}`;
  apiEmailAddr.innerText = `Email Address: ${jsonToParse.results[0].email}`;

  let fetchAPIBody = document.getElementsByTagName('body')[0];
  fetchAPIBody.appendChild(apiFirstName);
  fetchAPIBody.appendChild(apiLastName);
  fetchAPIBody.appendChild(apiPhoneNum);
  fetchAPIBody.appendChild(apiEmailAddr);
}

// console.log("Fetching data...");
// getJSON("https://randomuser.me/api/").then(data => {
//   console.log(data);
//   parseJSON(data);
// }).catch(error => {
// console.error(error);
// });

// function registerHandlers() {

//   function browserAPI(event) {
//     // event.preventDefault();
//   //   async function fetchRandomUserData() {
//   //     console.log("Fetching data...");
//   //     response = await fetch("https://randomuser.me/api/");
//   //     jsonData = await response.json();
//   //     console.log(jsonData);
//   //     // return jsonData
//   //   }
//   console.log("Hello")
//   }
//   async function fetchRandomUserData() {
//     console.log("Fetching data...");
//     response = await fetch("https://randomuser.me/api/");
//     jsonData = await response.json();
//     console.log(jsonData);
//     // return jsonData
//   }

//   function sayHello() {
//     console.log("Hello")
//   }

//   document.getElementById("browserAPI").addEventListener("click", fetchRandomUserData);
// }