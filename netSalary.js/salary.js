// net salary.js

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Your calculation logic here

    // Example: Using dummy values for demonstration
    const taxRate = 0.15; // 15%
    const nhifRate = 0.02; // 2%
    const nssfRate = 0.05; // 5%

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;

    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    return {
        grossSalary,
        payee,
        nhifDeduction,
        nssfDeduction,
        netSalary,
    };
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);
console.log(result);
