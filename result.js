// const searchParams = new URLSearchParams(location.search);
// for (const param of searchParams) {
//     console.log(param);
// }

const urlPara = new URL(location.href).searchParams;
const id = urlPara.get('id');
const password = urlPara.get('password');
const passwordConfirm = urlPara.get('confirm-password');
const skillOne = urlPara.get('skill-1');
const skillTwo = urlPara.get('skill-2');
const skillThree = urlPara.get('skill-3');
const userName = urlPara.get('name');
const emailAddress = urlPara.get('e-mail');
const userAge = urlPara.get('age');
console.log(id);
document.getElementById('id').innerHTML = id;
document.getElementById('password').innerHTML = password;
document.getElementById('password-confirm').innerHTML = passwordConfirm;
document.getElementById('skill-1').innerHTML = skillOne;
document.getElementById('skill-2').innerHTML = skillTwo;
document.getElementById('skill-3').innerHTML = skillThree;
document.getElementById('name').innerHTML = userName;
document.getElementById('e-mail').innerHTML = emailAddress;
document.getElementById('age').innerHTML = userAge;