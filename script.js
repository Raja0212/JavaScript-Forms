// Get the form and the input fields
const form = document.getElementById('registrationForm');
const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const dobInput = document.getElementById('dob');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const genderOtherInput = document.getElementById('genderOther');
const emailInput = document.getElementById('email');
const firstNameError = document.getElementById('firstnameError');
const lastNameError = document.getElementById('lastnameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const dobError = document.getElementById('dobError');
const genderError = document.getElementById('genderError');
const emailError = document.getElementById('emailError');
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');

// Add an event listener to the "Next" button click event
const nextButton = document.querySelector('#page1 button[type="button"]');
nextButton.addEventListener('click', function (event) {
    // Prevent the button's default action
    event.preventDefault();

    // Perform the validation
    if (validateFields()) {
        nextPage(); // Proceed to the next page if validation is successful
    }
});


// Function to validate all fields
function validateFields() {
    return (
        validateFirstName() &&
        validateLastName() &&
        validateUsername() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validateDOB() &&
        validateGender() &&
        validateEmail()
    );
}

// Function to display an error message
function displayErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Function to navigate to the next page
function nextPage() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

// Function to validate the first name field
function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    const pattern = /^[A-Za-z]+$/; // Regular expression to match only letters

    if (!pattern.test(firstName)) {
        firstNameError.textContent = 'First name should start with letters only.';
        firstNameError.style.display = 'block';
        return false; // Validation failed
    } else {
        firstNameError.textContent = '';
        firstNameError.style.display = 'none';
        return true; // Validation passed
    }
}

// Function to validate the last name field
function validateLastName() {
    const lastName = lastNameInput.value.trim();
    const pattern = /^[A-Za-z]+$/; // Regular expression to match only letters

    if (!pattern.test(lastName)) {
        lastNameError.textContent = 'Last name should start with letters only.';
        lastNameError.style.display = 'block';
        return false; // Validation failed
    } else {
        lastNameError.textContent = '';
        lastNameError.style.display = 'none';
        return true; // Validation passed
    }
}

function validateUsername() {
    const username = usernameInput.value.trim();
    const pattern = /^[a-zA-Z0-9_]{3,20}$/; // Regular expression to match alphanumeric characters and underscores, with a length of 3 to 20 characters

    if (!pattern.test(username)) {
        usernameError.textContent = 'Username should be alphanumeric and can contain underscores. Length must be between 3 and 20 characters.';
        usernameError.style.display = 'block';
        return false; // Validation failed
    } else {
        usernameError.textContent = '';
        usernameError.style.display = 'none';
        return true; // Validation passed
    }
}


// Function to validate the password field
function validatePassword() {
    const password = passwordInput.value.trim();
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // Regular expression for password validation

    if (!pattern.test(password)) {
        passwordError.textContent = 'Password should be at least 8 characters long and include a special character, a number, and a letter.';
        passwordError.style.display = 'block';
        return false; // Validation failed
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
        return true; // Validation passed
    }
}

// Function to validate the confirm password field
function validateConfirmPassword() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        return false; // Validation failed
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
        return true; // Validation passed
    }
}

// Function to validate the date of birth field
// function validateDOB() {
//     const dob = dobInput.value.trim();
//     const pattern = /^\d{4}-\d{2}-\d{2}$/; // Regular expression for date format (YYYY-MM-DD)

//     if (!pattern.test(dob)) {
//         dobError.textContent = 'Please enter a valid date of birth in the format DD-MM-YYYY.';
//         dobError.style.display = 'block';
//         return false; // Validation failed
//     }

//     const currentDate = new Date(); // Get the current date
//     const selectedDate = new Date(dob); // Convert the input date to a Date object
//     const minimumDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate()); // Calculate the minimum date (18 years ago)

//     if (selectedDate > minimumDate) {
//         dobError.textContent = 'You must be at least 18 years old.';
//         dobError.style.display = 'block';
//         return false; // Validation failed
//     }

//     dobError.textContent = '';
//     dobError.style.display = 'none';
//     return true; // Validation passed
// }


// Function to validate the date of birth field
function validateDOB() {
    const dob = dobInput.value.trim();

    if (dob === '') {
        dobError.textContent = 'Please enter your date of birth.';
        dobError.style.display = 'block';
        return false; // Validation failed
    }

    const selectedDate = new Date(dob);
    const currentDate = new Date();
    const minAge = 18; // Minimum age requirement in years

    // Calculate the age difference in years
    const ageDiff = currentDate.getFullYear() - selectedDate.getFullYear();

    // Check if the age difference is less than the minimum required age
    if (ageDiff < minAge) {
        dobError.textContent = 'You must be at least 18 years old to register.';
        dobError.style.display = 'block';
        return false; // Validation failed
    }

    dobError.textContent = '';
    dobError.style.display = 'none';
    return true; // Validation passed
}

// Set the minimum date for the date picker to disable dates below 18 years
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);
const maxDateString = maxDate.toISOString().split('T')[0];
dobInput.setAttribute('max', maxDateString);



// Function to validate the gender field
// Function to validate the gender field
function validateGender() {
    const selectedGender = document.querySelector('input[name="gender"]:checked');

    if (!selectedGender) {
        genderError.textContent = 'Please select a gender.';
        genderError.style.display = 'block';
        genderError.style.color = 'red';
        genderError.style.fontWeight = 'bold';

        return false; // Validation failed
    }

    genderError.textContent = '';
    genderError.style.display = 'none';

    if (selectedGender.value === 'other' && genderOtherInput.style.display !== 'none' && genderOtherInput.value.trim() === '') {
        genderError.textContent = 'Please specify your gender.';
        genderError.style.color = 'red';
        genderError.style.fontWeight = 'bold';
        genderError.style.display = 'block';
        return false; // Validation failed
    }

    return true; // Validation passed
}

// Add event listener to the gender radio buttons
const genderRadioButtons = document.querySelectorAll('input[name="gender"]');
genderRadioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        if (radioButton.value === 'other') {
            genderOtherInput.style.display = 'block';
        } else {
            genderOtherInput.style.display = 'none';
            genderOtherInput.value = ''; // Clear the value of the "Other" input field
        }
    });
});


// Function to validate the email field
function validateEmail() {
    const email = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    if (!pattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        return false; // Validation failed
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
        return true; // Validation passed
    }
}


// Add an event listener to the submit button click event
const submitButton = document.querySelector('#page2 button[type="submit"]');
submitButton.addEventListener('click', function (event) {
    // Prevent the button's default action
    event.preventDefault();

    // Perform the validation
    if (validatePage2Fields()) {
        submitForm(); // Submit the form if validation is successful
    }
});

// Function to validate all page 2 fields
function validatePage2Fields() {
    return (
        validateAddress1() &&
        validateAddress2() &&
        validateState() &&
        validateCity() &&
        validatePostalCode()
    );
}

// Function to validate Address 1 field
function validateAddress1() {
    const address1 = document.getElementById('address1').value.trim();

    if (address1 === '') {
        document.getElementById('address1Error').textContent = 'Address 1 is required.';
        document.getElementById('address1Error').style.display = 'block';
        return false; // Validation failed
    } else if (address1.length > 250) {
        document.getElementById('address1Error').textContent = 'Address 1 should not exceed 250 characters.';
        document.getElementById('address1Error').style.display = 'block';
        return false; // Validation failed
    } else {
        document.getElementById('address1Error').textContent = '';
        document.getElementById('address1Error').style.display = 'none';
        return true; // Validation passed
    }
}

// Function to validate Address 2 field
function validateAddress2() {
    const address2 = document.getElementById('address2').value.trim();

    if (address2 === '') {
        document.getElementById('address2Error').textContent = 'Address 2 is required.';
        document.getElementById('address2Error').style.display = 'block';
        return false; // Validation failed
    } else if (address2.length > 250) {
        document.getElementById('address2Error').textContent = 'Address 2 should not exceed 250 characters.';
        document.getElementById('address2Error').style.display = 'block';
        return false; // Validation failed
    } else {
        document.getElementById('address2Error').textContent = '';
        document.getElementById('address2Error').style.display = 'none';
        return true; // Validation passed
    }
}

// Function to validate State field
function validateState() {
    const state = document.getElementById('state').value.trim();

    if (state === '') {
        document.getElementById('stateError').textContent = 'State is required.';
        document.getElementById('stateError').style.display = 'block';
        return false; // Validation failed
    } else {
        document.getElementById('stateError').textContent = '';
        document.getElementById('stateError').style.display = 'none';
        return true; // Validation passed
    }
}

// Function to validate City field
function validateCity() {
    const city = document.getElementById('city').value.trim();

    if (city === '') {
        document.getElementById('cityError').textContent = 'City is required.';
        document.getElementById('cityError').style.display = 'block';
        return false; // Validation failed
    } else {
        document.getElementById('cityError').textContent = '';
        document.getElementById('cityError').style.display = 'none';
        return true; // Validation passed
    }
}

// Function to validate Postal Code field
function validatePostalCode() {
    const postalCode = document.getElementById('postcode').value.trim();

    if (postalCode === '') {
        document.getElementById('postcodeError').textContent = 'Postal Code is required.';
        document.getElementById('postcodeError').style.display = 'block';
        return false; // Validation failed
    } else if (!/^\d{6}$/.test(postalCode)) {
        document.getElementById('postcodeError').textContent = 'Postal Code should be a 6-digit number.';
        document.getElementById('postcodeError').style.display = 'block';
        return false; // Validation failed
    } else {
        document.getElementById('postcodeError').textContent = '';
        document.getElementById('postcodeError').style.display = 'none';
        return true; // Validation passed
    }
}

// Function to submit the form
function submitForm() {
    // Get the form element
    const form = document.getElementById('registrationForm');
  
    // Get the form data
    const formData = new FormData(form);
  
    // Display the form data in the console
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  
    // Reset the form
    form.reset();
    
    alert("Registered successfully");
    // Switch to page 1
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page1').classList.add('active');
}
  

// Function to display an error message
function displayErrorMessage(message) {
    alert(message);
}

