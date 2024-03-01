// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const height = parseFloat(document.querySelector('#height').value);
//     const weight = parseFloat(document.querySelector('#weight').value);
//     const result = document.querySelector('#results');

//     // Clear previous results
//     result.innerHTML = '';

//     if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
//         result.innerHTML = `<span>Enter valid height and weight</span>`;
//     } else {
//         const bmi = (weight / (height * height)).toFixed(2);

//         // Display BMI
//         result.innerHTML += `<span>BMI: ${bmi}</span>`;

//         // Display BMI category
//         if (bmi < 18.6) {
//             result.innerHTML += `<span>Underweight</span>`;
//         } else if (bmi >= 18.6 && bmi <= 24.9) {
//             result.innerHTML += `<span>Normal weight</span>`;
//         } else {
//             result.innerHTML += `<span>Overweight</span>`;
//         }
//     }
// });

// OR //

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (isNaN(height) || height === '' || height < 0) {
        // console.log(`Enter valid height: ${height}`);
        result.innerHTML = `<span>Enter valid height: ${height}</span></br>`;
    } if (isNaN(weight) || weight === '' || weight < 0) {
        result.appendChild(document.createElement("span")).textContent = `Enter valid weight: ${weight}`;
    } else {
        const bmi = (weight / (height*height)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            result.appendChild(document.createElement("span")).textContent = `Under Weight`;
        } else if (bmi >= 18.6 && bmi <=24.9) {
            result.appendChild(document.createElement("span")).textContent = `Normal range`;
        } else {
            result.appendChild(document.createElement("span")).textContent = `Greater`;
        }
    }
});
