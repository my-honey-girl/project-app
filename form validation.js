var showBtn = document.querySelector(".showBox");
var password = document.querySelector("[type=password]");
var fname = document.querySelector("#fn");
var lname = document.querySelector("#ln");
var errors = document.getElementsByClassName("error");

function validateFn() {
    if(fname.value.trim() == ""){
        errors[0].style.display = "block";
        fname.style.border = "1px solid red";
        fname.focus();
        return false;
    }
    if(lname.value.trim() == ""){
        errors[1].style.display = "block";
        lname.style.border = "1px solid red";
        lname.focus();
        return false;
    }
    if(password.value == ""){
        errors[2].style.display = "block";
        errors[2].innerHTML = "Please Enter your Password";

        password.style.border = "1px solid red";
        password.focus();
        return false;
    } else if(password.value.length < 6){
        errors[2].style.display = "block";
        errors[2].innerHTML = "Password must not be less than 6 Characters";
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
}


fname.addEventListener("keyup", fnameCorrect);
lname.addEventListener("keyup", lnameCorrect);
password.addEventListener("keyup", passCorrect);

function fnameCorrect(){
    if(fname.value.trim() != ""){
        errors[0].style.display = "none";
        fname.style.border = "2px solid #ddd";
        return true;
    }
}
function lnameCorrect(){
    if(lname.value.trim() != ""){
        errors[1].style.display = "none";
        lname.style.border = "2px solid #ddd";
        return true;
    }
}

function passCorrect(){
    if((password.value != "") && (password.value.length > 6)){
        errors[2].style.display = "none";
        password.style.border = "2px solid #ddd";
        return true;
    }
}


// THis is the code for show and hide password button 
showBtn.addEventListener("click", function(){
    if(password.getAttribute("type") == "password"){
        password.setAttribute("type", "text");
        showBtn.classList.remove("show");
        showBtn.classList.add("hide");
        showBtn.innerHTML = "hide";
        password.focus();
    } else {
        password.setAttribute("type", "password");
        showBtn.classList.remove("hide");
        showBtn.classList.add("show");
        showBtn.innerHTML = "show";
        password.focus();
    }
    
})