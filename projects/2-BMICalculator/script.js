const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (isNaN(height) || height === '' || height < 0) {
        // console.log(`Enter valid height: ${height}`);
        result.innerHTML = `<span>Enter valid height: ${height}</span></br>`;
    } if (isNaN(weight) || weight === '' || weight < 0) {
        // result.innerHTML = `Enter valid weight: ${weight}`;
        // result.innerHTML = `<span>Enter valid weight: ${weight}</span>`;
        result.appendChild(document.createElement("span")).textContent = `Enter valid weight: ${weight}`;
    } else {
        const bmi = (weight / (height*height)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            result.appendChild(document.createElement("span")).textContent = `Under Weight`;
        }
    }
});