
/*output 
a)net salary
b)gross salary
c)nssf deductions
d)nhif deductions
e)payee

rates
a)tax
b)nssf
c)nhif

users input
a)basic salary
b)benefits*/

/*computations
a)grossSalary = basicSalary + benefits
b)payee =   taxRate * grossSalary 
c)nhifAmount = grossSalary * nhifDeduction
d)nssfAmount = grossSalary * nssfDeduction
e)netSalary = grossSalary - payee - NHIF - NSSF
*/

//  tax rates & deduction
const taxRate = 13/100;
const nhifDeductions = 10/100;
const nssfDeductions = 20/100;

// propmts idividual’s  basic salary and benefits
const basicSalary = parseFloat(prompt("what is your basicSalary: "));
const benefits = parseFloat(prompt("Your  benefits: "));

// grossSalary=
const grossSalary = basicSalary + benefits;

// payee=
const payee =   taxRate * grossSalary  ;

// NHIF deduction=
const NHIF = grossSalary * nhifDeductions;

// NSSF deduction=
const NSSF = grossSalary * nssfDeductions;

// netSalary=
const netSalary = grossSalary - payee - NHIF - NSSF;

// outputs
console.log(`Payee : ${payee}`);

console.log(`NHIF Deduction: ${NHIF}`);

console.log(`NSSF Deduction: ${NSSF}`);

console.log(`Gross salary: ${grossSalary}`);

console.log(`Net salary: ${netSalary}`);