const form = document.querySelector('form')
//this usecase will give empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  const bmi = (weight/(height * height)* 10000).toFixed(2);

  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter valid height`
    return
  }else if(weight == '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter valid weight`
    return
  }
  else{
    results.innerHTML = bmi;
    if(bmi < 18.6){
      results.innerHTML = `You're underWeight (${bmi})`
      }else if(bmi < 25){
      results.innerHTML = `You're in Normal Range (${bmi})`
    } else{
      results.innerHTML = `You're in OverWeight (${bmi})`
    }
  }
})