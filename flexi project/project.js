function indreform() {
    if (document.getElementById("name").value == "") {
        alert("Please enter your first name");
        document.getElementById("name").focus();
        return false;
    }
    if (document.getElementById("name2").value == "") {
        alert("Please enter your last name");
        document.getElementById("name2").focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Please enter your email address");
        document.getElementById("email").focus();
        return false;
    } else {
        alert("Thank you for filling out our form")
    }
}

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
    document.getElementsByClassName("formdiv").style.display = "none";
}