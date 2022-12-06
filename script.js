// Honesty Statement
document.querySelector("#content").textContent = 
"I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students."

// postal code with a regex pattern
function fixPostalCode(postalCode) {
    var capPostalCode = postalCode.toUpperCase();
    var newPostalCode = capPostalCode.trim();
    var w1 = newPostalCode.substring(0, 3);
    var w2 = newPostalCode.substring(3);
    var words = [w1, w2];
    var joinPostalCodeWords = words.join(' ');
    var fixedPostalCode = joinPostalCodeWords.replace(/\s+/g, ' ');
    const exclude1 = new RegExp('[^DFIOQUWZ]');
    const exclude2 = new RegExp('[^DFIOQU]');

    if (
        exclude1.test(fixedPostalCode[0]) === true &&
        isNaN(fixedPostalCode[1]) === false &&
        exclude2.test(fixedPostalCode[2]) === true &&
        fixedPostalCode[3] === ' ' &&
        isNaN(fixedPostalCode[4]) === false &&
        exclude2.test(fixedPostalCode[5]) === true &&
        isNaN(fixedPostalCode[6]) === false &&
        fixedPostalCode.length === 7
    ) {
        return `${fixedPostalCode}`;
    }
    return false;
}

var btn = document.querySelector("#submit");
var postalCode = document.querySelector("#postalCode");
btn.addEventListener("click", () => {
    if(fixPostalCode(postalCode.value)){
        postalCode.value = fixPostalCode(postalCode.value);
    }
    else {
        btn.disabled = "disabled";
        document.getElementById("checkbox").checked=false;
        alert("invalid postal code!");
    }
});

// hourly rate function
const hiring = document.querySelector('#hiring');
hiring.addEventListener('change', showRate);
function showRate() {
    if (this.checked) {
        document.querySelector('#rate').hidden=false;
        document.querySelector('#option1').hidden=true;
        document.querySelector('#option2').hidden=true;
    }
}

// checkbox function
function activateButton(element) {
    if(element.checked) {
        document.getElementById("submit").disabled = false;
    }
    else  {
        document.getElementById("submit").disabled = true;
    }
}

// document
//   .getElementById('checkbox')
//   .addEventListener('change', (e) => activateButton(e.srcElement));
