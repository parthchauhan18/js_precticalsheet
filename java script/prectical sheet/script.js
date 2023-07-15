// **************************click event***********************

//  frist name and last name

function parth(){
     let fname = document.getElementById("fname").value;
    if (fname == "" || fname == null) {
      document.getElementById("msg1").innerHTML = "Enter Fristname";
    } else {
      document.getElementById("msg1").innerHTML = "";
    }
  
    // middle name
  
    let mname = document.getElementById("mname").value;
  
    if (mname == "" || mname == null) {
      document.getElementById("msg2").innerHTML = "Enter middlename";
    } else {
      document.getElementById("msg2").innerHTML = "";
    }
  
    //  Last name
  
    let lname = document.getElementById("lname").value;
  
    if (lname == "" || lname == null) {
      document.getElementById("msg3").innerHTML = "Enter last name";
    } else {
      document.getElementById("msg3").innerHTML = "";
    }
  
    //  Address
  
    let addr = document.getElementById("addr").value;
    if (addr == "" || addr == null) {
      document.getElementById("msg4").innerHTML = "enter your address";
    } else {
      document.getElementById("msg4").innerHTML = "";
    }
  
    // date of birth
  
    let datebrith = document.getElementById("datebrith").value;
    if (datebrith == "" || datebrith==null) {
      document.getElementById("msg5").innerHTML = "please enter brith date";
    } else {
      document.getElementById("msg5").innerHTML = "";
    }
    // gender
  
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("others").checked;
  
    if (male == false && female == false && others == false) {
      document.getElementById("msg6").innerText = "please, select gender";
    } else {
      document.getElementById("msg6").innerText = "";
    }
  
    // //  Experience
  
    let Experience = document.getElementById("Experience").value;
    if (Experience == "-1") {
      document.getElementById("msg7").innerHTML = "please enter Experience";
    } else {
      document.getElementById("msg7").innerHTML = " ";
    }
  
    // moble number
  
    let mobile = document.getElementById("mobile").value;
    if (mobile == "" || mobile == null) {
      document.getElementById("msg8").innerHTML = "Enter mobile number";
    } else {
      document.getElementById("msg8").innerHTML = "";
    }
  
    // email Id
  
    let mail = document.getElementById("mail").value;
    if (mail == "" || mail == null) {
      document.getElementById("msg9").innerHTML = "Enter email id";
    } else {
      document.getElementById("msg9").innerHTML = "";
    }
  
    // create password
  
    let pass = document.getElementById("pass").value;
    if (pass == "" || pass == null) {
      document.getElementById("msg10").innerHTML = "create password";
    } else {
      document.getElementById("msg10").innerHTML = "";
    }
  
    // confirm password
  
    let cpass = document.getElementById("cpass").value;
    if (cpass == "" || cpass == null) {
      document.getElementById("msg11").innerHTML = "confirm password";
    } else{
      document.getElementById("msg11").innerHTML = "";
    }
    return false;
  }
  
  // ****************** show password*******************
  
  function Showpassword() {
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    if (pass.type == "password") {
      pass.type = "text";
      cpass.type = "text";
    } else{
      pass.type = "password";
      cpass.type = "password";
    }
  }

  //*****************************   blur event    ************************
  function blankcheck(blank, spanid) {
    if (blank.value == "" || blank.value == null) {
      document.getElementById(spanid).innerText = "please, fill this field";
    } else{
      document.getElementById(spanid).innerText = "";
    }
  }
  
  // *******************************    keyboard event  *************************
  
  function checkname(inpute, spanid) {
    let regex = /^[a-zA-Z]*$/;
    if (!regex.test(inpute.value) || inpute.value.length < 2) {
      document.getElementById(spanid).innerHTML = "please enter valid name";
    } else{
      document.getElementById(spanid).innerHTML = "";
    }
  }
  
  //  Address
  
  function checkaddress() {
    let addr = document.getElementById("addr").value;
    if (addr.length < 25) {
      document.getElementById("msg4").innerHTML = "minimum charcter must be more than 25 ";
    } else {
      document.getElementById("msg4").innerHTML = "";
    }
    return false;
  }
  
  //  mobile number
  function checkmobile() {
    let mobile = document.getElementById("mobile").value;
    let testing = /^[0-6]/;
    if (testing.test(mobile) || mobile.length < 10 || mobile.length > 10) {
      document.getElementById("msg8").innerHTML = "invalid number";
    } else {
      document.getElementById("msg8").innerHTML = "";
    }
    return false;
  }
  
  // email id
  
  function emailcheck() {
    let mail = document.getElementById("mail").value;
    let testing = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    if (!testing.test(mail)) {
      document.getElementById("msg9").innerHTML = "invalid email id";
    } else {
      document.getElementById("msg9").innerHTML = "";
    }
    return false;
  }
  
  // password
  
  function checkpass() {
    let pass = document.getElementById("pass").value;
    let testing =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!testing.test(pass)) {
      document.getElementById("msg10").innerHTML = "invalid password";
    } else {
      document.getElementById("msg10").innerHTML = "";
    }
    return false;
  }
  
  // confirm password
  
  function confirmpass() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
      document.getElementById("msg11").innerHTML = "password doesn't match";
    } else {
      document.getElementById("msg11").innerHTML = "";
    }
  }