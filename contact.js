function sendMail(){
    let parms = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    email.send("service_si3rrbh","template_96726ss",parms).then(alert("Email Sent!!"))
}