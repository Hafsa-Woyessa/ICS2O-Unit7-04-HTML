// this connects the "checkAdmission" button to 
document.getElementById('button').addEventListener('click', checkAdmission)
let userAge = 0
let userDate = 'Friday'

function checkAdmission () {
  // gets the age number and date  and coverts it to an integer
  userAge = document.getElementById('input-one').value
  userAge = parseInt(userAge)

  userDate = document.getElementById('input-two').value
  // checks if the date and users age makes them eligible for the discount 
  if ((userDate === 'Tuesday' || userDate === 'Thursday')||(userAge > 17 || userAge < 21))
  {
    document.getElementById('answer').innerHTML = 'You get student pricing.'
  }
}
