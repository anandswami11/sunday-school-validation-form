console.log('anand')

function validateForm(){

    let first_name = document.querySelector('#firstname').value
    let first_name_size = first_name.length

    let last_name = document.querySelector('#lastname').value
    let last_name_size = last_name.length


    let phone = document.querySelector('#phone').value
    let phone_size = phone.length

    let email = document.querySelector('#email').value
    let email_size = email.length

    let password = document.querySelector('#password').value
    let password_size = password.length

    console.log(phone_size)

    if(first_name_size < 1){

        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = 'first Name is required minium 1 characters!!'

    }else if(last_name_size < 1){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = 'last Name is required minium 1 characters!!'

    }else if(phone_size !== 10){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = 'Phone number should be 10 digit'

    }else if(email_size < 5){
       document.querySelector('.success').innerText = ''
      document.querySelector('.error').innerText = 'Please enter a valid email address'

    }else if(password_size < 8){
        document.querySelector('.success').innerText = ''
        document.querySelector('.error').innerText = 'Please provide a password'

    }else{

        document.querySelector('.error').innerText = ''
        document.querySelector('.success').innerText = 'New account created successfully'

    }

}