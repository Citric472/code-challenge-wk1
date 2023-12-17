// grading.js

function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

// Prompt the user for input
const userMarks = parseFloat(prompt('Enter student marks (0-100):'));

// Validate input and calculate grade
if (!isNaN(userMarks) && userMarks >= 0 && userMarks <= 100) {
    const userGrade = calculateGrade(userMarks);
    alert(`Student Grade: ${userGrade}`);
} else {
    alert('Invalid input. Please enter a valid number between 0 and 100.');
}
