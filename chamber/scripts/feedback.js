const firstNameElement = document.querySelector('#fname')
const lastNameElement = document.querySelector('#ltname');
const ogTitleElement = document.querySelector('#organizationalTitle');
const emailElement = document.querySelector('#emailaddress');
const phonenumberElement = document.querySelector('#phonenumber');
const ogname = document.querySelector('.og-name');
const ogdescription = document.querySelector('.og-des')
// from second html page  
let displayresponse = document.querySelector('.text-content')
// array to save data 
const userinforation = [];

let data = localStorage.getItem('userInformation');
let useData = JSON.parse(data);

let html = `
  <p><span>Thank you</span> ${useData[0]} ${useData[1]} for signing up</p>
  <p><span>organizational title </span> ${useData[2]}</p>
  <p><span>Email address </span> : ${useData[3]}</p>
  <p><span>mobile phone number </span> : ${useData[4]}</p>
  <p><span>business/organization's name </span> : ${useData[5]}</p>
  <p><span>business/organization's description </span> : ${useData[6]}</p>
`
displayresponse.innerHTML += html;

function getInformation() {
  let firstName = firstNameElement.value;
  let lastName = lastNameElement.value;
  let ogTitle = ogTitleElement.value;
  let email = emailElement.value;
  let phone = phonenumberElement.value
  let ogfullName = ogname.value;
  let ogcontent = ogdescription.value
  userinforation.push(firstName, lastName, ogTitle, email, phone, ogfullName, ogcontent);
  localStorage.setItem('userInformation', JSON.stringify(userinforation))
}


