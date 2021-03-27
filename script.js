// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function getRandNum(length){
  return Math.floor(Math.random() *length);
}


function generatePassword(){
  console.log("generate password");
  var len=prompt("Length of password(at least 8, no more than 128):");
  
  len = parseInt(len);
  if(isNaN(len)){
    alert("Not a number");
    generatePassword();
  }else if(len < 8){
    alert("must be at least 8");
    generatePassword();
  }else if(len > 128){
    alert("cannot be anymore than 128");
    generatePassword();
  }

  var includeUpperCase = confirm("Include upper case letters");
  var includeNumbers = confirm("Include numbers");
  var includeSpecialChars = confirm("Include special characters");

  console.log("Length: "+len+"\nUppercase: "+includeUpperCase+"\nNumbers: "+includeNumbers+ "\nSpecial Characters: "+includeSpecialChars);


  /*
  var password = "";
  for(var i=0;i<len; i++){

  }
  */

  //console.log("\"", "\\");
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var digits="0123456789";
  var specialChars=" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var options = letters;
  if(includeUpperCase){
    options += upper;
  }
  if(includeNumbers){
    options += digits;
  }
  if(includeSpecialChars){
    options += specialChars;
  }
  console.log("Available: ",options);

  //
  var password = "";
  for(var i=0;i<len; i++){
    password += options[getRandNum(options.length)];
  }

  console.log("Password", password);
  return password;
}
