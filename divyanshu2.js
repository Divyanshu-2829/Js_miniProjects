const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();


const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')
if(height ==="" || height<0 || isNaN(height)){
    results.innerHTML = "please give a valid height"
    }
else if(weight ==="" || weight<0 || isNaN(weight)){
    results.innerHTML = "please give a valid weight"
    }
else
{
    const BMI = (weight / (height*height/10000)).toFixed(3)

    if(BMI<18.6)
    results.innerHTML = `The person is under Weight ${BMI}`
    else if(BMI>=18.6 && BMI<24.9)  
    results.innerHTML = `The person is Normal Weight ${BMI}`
    else 
    results.innerHTML = `The person is Over Weight ${BMI}`
}


})