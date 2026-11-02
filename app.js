// Project 1: write your form validation in this file.

const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const frequencyInput = document.querySelector("#frequency");

const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const frequency = frequencyInput.value.trim();


let nameError = "";
let emailError = "";
let frequencyError = "";

//-----------------------------------------------------------------//

 if (name === "") {
        nameError = "Enter your name.";
    }


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError = "Enter your email address.";
    } else if (!emailPattern.test(email)) {
        emailError = "Enter an email address like name@example.com.";
    }

 if (frequency === "") {
        frequencyError = "Choose how often we should email you.";
    }   

 // Name error
    document.querySelector("#name-error").textContent = nameError;

    if (nameError !== "") {
        nameInput.setAttribute("aria-invalid", "true");
    } else {
        nameInput.removeAttribute("aria-invalid");
    }   

 // Email error
    document.querySelector("#email-error").textContent = emailError;

    if (emailError !== "") {
        emailInput.setAttribute("aria-invalid", "true");
    } else {
        emailInput.removeAttribute("aria-invalid");
    }


    // Frequency error
    document.querySelector("#frequency-error").textContent = frequencyError;

    if (frequencyError !== "") {
        frequencyInput.setAttribute("aria-invalid", "true");
    } else {
        frequencyInput.removeAttribute("aria-invalid");
    }

 if (nameError !== "" || emailError !== "" || frequencyError !== "") {

        // Focus on the first field with an error
        if (nameError !== "") {
            nameInput.focus();
        } else if (emailError !== "") {
            emailInput.focus();
        } else {
            frequencyInput.focus();
        }

        // Remove previous success message
        formMessage.textContent = "";
        formMessage.classList.remove("success");

        return;
    }

formMessage.textContent =
        `Thank you, ${name}! You're on the mailing list.`;

    formMessage.classList.add("success");


    // Clear the form
    form.reset();

});



