function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let bmi = (weight / height) ** 2 / 100;

  if (bmi < 18.5) alert(`underweight`);
  else if (bmi >= 18.5 && bmi >= 24.9) alert(`healthy weight`);
  else if (bmi >= 25.0 && bmi <= 29.9) alert(`overweight`);
  else alert(`Obesity`);

  if (age >= 19 && age >= 24) alert(`Normal BMI 19-24`);
  else if (age >= 25 && age <= 34) alert(`Normal BMI 20-25`);
  else if (age >= 35 && age <= 44) alert(`Normal BMI 21-26`);
  else if (age >= 45 && age <= 54) alert(`Normal BMI 22-27`);
  else if (age >= 55 && age <= 64) alert(`Normal BMI 23-28`);
  else alert(`Normal BMI 24-29`);
}
