var email = document.getElementById("email");
var password = document.getElementById("password");
var number= document.getElementById("num");
var error = document.getElementById("error");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");

function validate(){
    var regexprssn =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var nums = /[0-9]/g;
    var num =/^[1-9]{3}[-,\s]?[1-9]{3}[-,\s]?\d{4}$/
    if(regexprssn.test(email.value)==false){
       
        error.innerHTML=("Invalid");
        error.style.color="red";
        email.style.border =("3px solid red");
        return false;    
    }else{
        error.innerHTML=("valid");
        error.style.color="green";
        email.style.border =("3px solid green");

    }
    if(password.value.length <=8){
        error1.innerHTML=("**password minimum 8 characters");
        password.style.border =("3px solid red");
        error1.style.color="red";
        return false;
    }else{
        error1.innerHTML=("**8 characters");
        password.style.border =("3px solid green");
        error1.style.color="green";

    }
    if(upper.test(password.value)==false){
        error1.innerHTML=("**Atleast 1 uppercase letter");
        password.style.border =("3px solid red");
        error1.style.color="red";
        return false;
    }else{
        error1.innerHTML=("**valid");
        password.style.border =("3px solid green");
        error1.style.color="green";

    }
    if(lower.test(password.value)==false){
        error1.innerHTML=("**Atleast 1 lowercase letter");
        password.style.border =("3px solid red");
        error1.style.color="red";
        return false;
    }else{
        error1.innerHTML=("**valid");
        password.style.border =("3px solid green");
        error1.style.color="green";

    }
    if(nums.test(password.value)==false){
        error1.innerHTML=("**Atleat one number");
        password.style.border =("3px solid red");
        error1.style.color="red";
        return false;
    }else{
        error1.innerHTML=("**valid");
        password.style.border =("3px solid green");
        error1.style.color="green";

    }
    
    if((number.value.length - (number.value.match(/[-,\s]/g) || []).length)!=10) {
        error2.innerHTML=("** Should contain 10 numbers ");
        number.style.border =("3px solid red");
        error2.style.color="red";
        return false;
    }else{
        error2.innerHTML=("**valid");
        number.style.border =("3px solid green");
        error2.style.color="green";

    }
    if(num.test(number.value)==false){
        error2.innerHTML=("** Accept numbers only");
        number.style.border =("3px solid red");
        error2.style.color="red";
        return false;
    }
    else{
        return true;
    }
}   
function passwordChanged() {
        var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");

        var pwd = document.getElementById("password");
        if (pwd.value.length == 0) {
            strength.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">password strength--Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">password strength--Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">password strength--Weak!</span>';
        }
}


// When the user clicks on the password field, show the message box
password.onfocus = function() {
  error1.style.display = "block";
}

