let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const weight = parseInt(document.getElementById('weight-input').value);
    const height = parseInt(document.getElementById('height-input').value);
    const result = document.getElementById('output');
    let weight_status=false, height_status=false;

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }
    
    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight_status && height_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = 'Your BMI is ' + bmi + ' which means You are <b>Underweight';
        }else if(bmi >= 18.5 && bmi < 25){
            result.innerHTML = 'Your BMI is ' + bmi + ' which means You are <b>Normal weight';
        }else if (bmi >= 25 && bmi < 30){
            result.innerHTML = 'Your BMI is ' + bmi + ' which means You are <b>Overweight';
        }else if (bmi >= 30){
            result.innerHTML = 'Your BMI is ' + bmi + ' which means You are <b>Obesity';
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});