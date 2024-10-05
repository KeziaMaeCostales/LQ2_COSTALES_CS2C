// Step 1: Ask for user input
var name = prompt("Enter your name:");
var address = prompt("Enter your address:");
var age = parseInt(prompt("Enter your age:")); // Convert to integer
var role = prompt("Enter your class role (Officer, Student, Teacher):");
var course = prompt("Enter your course (BSCS, BSM, BAEL):");

// Step 2: Conditional statement for course
if (course === "BSCS") {
    // Segregation for BSCS
    if (role === "Officer") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are an Officer in BSCS.");
        }
    } else if (role === "Student") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Student in BSCS.");
        }
    } else if (role === "Teacher") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Teacher in BSCS.");
        }
    } else {
        alert("Role not recognized! Defaulting to Student.");
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Student in BSCS.");
        }
    }
} else if (course === "BSM") {
    // Segregation for BSM
    if (role === "Officer") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are an Officer in BSM.");
        }
    } else if (role === "Student") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Student in BSM.");
        }
    } else if (role === "Teacher") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Teacher in BSM.");
        }
    } else {
        alert("Role not recognized! Defaulting to Student.");
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Student in BSM.");
        }
    }
} else if (course === "BAEL") {
    // Segregation for BAEL
    if (role === "Officer") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are an Officer in BAEL.");
        }
    } else if (role === "Student") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Student in BAEL.");
        }
    } else if (role === "Teacher") {
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Teacher in BAEL.");
        }
    } else {
        alert("Role not recognized! Defaulting to Student.");
        for (var i = 0; i < age / 4; i++) {
            alert("Hello " + name + "! You are a Student in BAEL.");
        }
    }
} else {
    alert("Course not recognized! Please check your input.");
}

