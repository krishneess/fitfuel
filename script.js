// ==========================================
// FITFUEL - JAVASCRIPT DATA & VALIDATION
// ==========================================

// Array to store user registrations
let registrations = [];

const registrationResult = document.getElementById("registrationResult");
const userDetails = document.getElementById("userDetails");
const jsonOutput = document.getElementById("jsonOutput");

// Get the form
const planForm = document.getElementById("planForm");


// Form submit event
planForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get form values
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const age = document.getElementById("userAge").value.trim();
    const goal = document.getElementById("fitnessGoal").value;
    const plan = document.getElementById("mealPlan").value;


    // Get error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const ageError = document.getElementById("ageError");
    const goalError = document.getElementById("goalError");
    const planError = document.getElementById("planError");
    const successMessage = document.getElementById("successMessage");


    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    goalError.textContent = "";
    planError.textContent = "";

    successMessage.classList.add("d-none");
    successMessage.textContent = "";


    // Validation flag
    let isValid = true;


    // ==========================================
    // NAME VALIDATION
    // ==========================================

    if (name === "") {

        nameError.textContent = "Please enter your name.";
        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent = "Name must contain at least 3 characters.";
        isValid = false;
    }


    // ==========================================
    // EMAIL VALIDATION
    // ==========================================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Please enter your email.";
        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }


    // ==========================================
    // AGE VALIDATION
    // ==========================================

    if (age === "") {

        ageError.textContent = "Please enter your age.";
        isValid = false;

    } else if (age < 13 || age > 100) {

        ageError.textContent = "Age must be between 13 and 100.";
        isValid = false;
    }


    // ==========================================
    // FITNESS GOAL VALIDATION
    // ==========================================

    if (goal === "") {

        goalError.textContent = "Please select your fitness goal.";
        isValid = false;
    }


    // ==========================================
    // MEAL PLAN VALIDATION
    // ==========================================

    if (plan === "") {

        planError.textContent = "Please select a meal plan.";
        isValid = false;
    }


    // ==========================================
    // SAVE DATA ONLY IF VALID
    // ==========================================

    if (isValid) {

        // Create user object
        const userData = {

            name: name,
            email: email,
            age: Number(age),
            fitnessGoal: goal,
            mealPlan: plan

        };


        // Store object inside Array
        registrations.push(userData);


        // Convert data to JSON
        const jsonData = JSON.stringify(userData, null, 2);


        // Display success message
        successMessage.textContent =
            "Registration successful! Your " +
            plan +
            " plan has been selected.";

        successMessage.classList.remove("d-none");


        // Display JSON in browser console
        console.log("User Data:", userData);
        console.log("All Registrations:", registrations);
        console.log("JSON Data:", jsonData);

        // Display submitted data on webpage
        userDetails.innerHTML = `
    <p><strong>Name:</strong> ${userData.name}</p>
    <p><strong>Email:</strong> ${userData.email}</p>
    <p><strong>Age:</strong> ${userData.age}</p>
    <p><strong>Fitness Goal:</strong> ${userData.fitnessGoal}</p>
    <p><strong>Meal Plan:</strong> ${userData.mealPlan}</p>
`;

        jsonOutput.textContent = jsonData;

        registrationResult.classList.remove("d-none");


        // Clear form
        planForm.reset();

    }

});