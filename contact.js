document.addEventListener("DOMContentLoaded", function() {
const contactForm = document.querySelector(".contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const message= document.getElementById("message").value
    // validation
    if (name === "" || email === "" || phone === "" || message === ""){
       
        alert("Please fill out all fields.");
        return;
    } 
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

        // Reset the form
    contactForm.reset();
        alert("Your message has been sent!");

    }); 
}); 