function validateForm() {
    console.log('success prevent default submit')

    let name = document.forms['myForm']['name'].value
    console.log(name)
    if(!name){
        document.getElementById('name_error').style.display = 'block'
    }
    else {
        document.getElementById('name_error').style.display = 'none'
    }
    let second_name = document.forms['myForm']['second_name'].value
    console.log(second_name)
    if(!second_name){
        document.getElementById('second_name_error').style.display = 'block'
    }
    else{
        document.getElementById('second_name_error').style.display = 'none'    
    let email = document.forms['myForm']['email']. value
    console.log(validateEmail(email) )
    if (!email || !validateEmail(email)) {
        document.getElementById('email_error').style.display = 'block'
    }
    else{
        document.getElementById('email_error').style.display = 'none'
    }
    let passwd1 = document.forms['myForm']['passwd1'].value
    console.log(passwd1)
    if(!passwd1){
        document.getElementById('passwd1_error').style.display = 'block'
    }
    else{
        document.getElementById('passwd1_error').style.display = 'none'
    }
    let passwd2 = document.forms['myForm']['passwd2'].value
    console.log(passwd2)
    if (passwd1 != passwd2){
        document.getElementById('passwd2_error').style.display = 'block'
    }
    else{
        document.getElementById('passwd2_error').style.display = 'none'
    }
    
    let gender = document.forms['myForm']['gender'].value
    let male = document.forms['myForm']['male'].checked
    let female = document.forms['myForm']['female'].checked
    console.log(gender)
    if (!male && !female) {
        document.getElementById('gender_error').style.display = 'block'
    }
    else {
        document.getElementById('gender_error').style.display = 'none'
    }
    let request = new XMLHttpRequest
    request.open('POST', './server.php')
    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    let data = {
        name: name
    }
    request.send(JSON.stringify(data))
    request.onreadystatechange = function () {
        if (request.readyState === 4)
            if (request.status === 200) {
                console.log(request.responseText)
            }
    }
    return false;
}


validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/
    return re.test(email)
}

}