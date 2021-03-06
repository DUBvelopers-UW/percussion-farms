const api_key = "IP_OQb5-0fXNXSRKO";
const service = "service_bph6ztr";
const template = "template_t6gbcim";

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init(api_key);
})();

window.onload = function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        emailjs.sendForm(service, template, this)
            .then(function() {
                console.log("SUCCESS");
                let ele = document.getElementById("success-message");
                ele.style.display = "block";
                fadeOutEffect("success-message"); 
            }, function(error) {
                console.log('FAILED...', error);
                
            });
            document.getElementById("contact-form").reset();
    });
}

// function temp() {
//     alert("gello");
    // document.getElementById("testsbt").addEventListener("submit", function(event) {
    //     console.log("hello success");
    //     alert("helo");
    // });
    // document.getElementById("testsbt").addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     let ele = document.getElementById("success-message");
    //     ele.style.display = "block";
    //     fadeOutEffect("success-message");
    //     document.getElementById("testsbt").reset();
    // });
// } 

function fadeOutEffect(ID) {
    var fadeTarget = document.getElementById(ID);

    setTimeout(function() {
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);  
            }
        }, 100);
    }, 4000)

    setTimeout(function() {
        document.getElementById(ID).style.display = "none"; 
    }, 5000);

    fadeTarget.style.opacity = 1;
}
