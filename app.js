
const buttonBMI = document.querySelector('button');

buttonBMI.addEventListener('click', _ => {
    const resultInput = document.querySelector('.bmi');
    const height = Number(document.querySelector('.height').value);
    const weight = Number(document.querySelector('.weight').value);

    BMIresult = weight/(height/100)**2;

    resultInput.value = BMIresult.toFixed(1);

    const weightCondition = document.querySelector('span');

    if (BMIresult < 18.5) {
        weightCondition.innerText = 'Underweight';
    } else if (BMIresult <=24.9) {
        weightCondition.innerText = 'Healthy Weight';
    } else if (BMIresult <= 29.9) {
        weightCondition.innerText = 'Overweight';
    } else {
        weightCondition.innerText = 'Obesity';
    }
})