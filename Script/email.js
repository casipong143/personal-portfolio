function sendEmail(){
        
        var params = {
            email: document.getElementById("email").value,
            name: document.getElementById("name").value,
            contact_no: document.getElementById("contact").value,
            message: document.getElementById("message").value,
        };

      const serviceID = "service_shmjbo7";
      const templateID = "template_bmomm8c";

       emailjs.send(serviceID, templateID, params)
       .then(
          res => {
            document.getElementById("name").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message Sent");
          }
        )
       .catch((err) => console.log(err));
    }