let capchecked = false;
function beforeSubmit() {
        if (capchecked) {
                let inputdate = document.querySelector(".inputdate");
                let outputdate = document.querySelector(".outputdate");
                console.log('>>>> ' + inputdate.value);

                let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
                outputdate.value = formattedDate;
        }
        else {
                alert("Pls check the recapthcha");
                event.preventDefault();
        }
}
//This function is copied from web-to-lead settings under SFDC Setup Menu. When we generate markup for web-to-lead form after enabling re-CAPTCHA [checkbox]
function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") { var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value); elems["ts"] = JSON.stringify(new Date().getTime()); document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

function capsuccess() {
        capchecked = true;
}
