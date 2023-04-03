let userName = document.getElementById('userName')
let password = document.getElementById('password')
let btn = document.getElementById("btn")
let image = document.getElementById("image")


// Validatting  Credentials
btn.addEventListener('click', (eve) => {
    eve.preventDefault() //Prevents the page from reloading
    // console.log(userName.value, password.value);
    if (userName.value == "manu@gmail.com" && password.value == 80732) {
        //redirect to home page
        window.location.href = "BookMyShow.html"

    } else {
        // alert("Invalid UserName and password")
        image.style.display = "block"


        if (userName.value != "manu@gmail.com"){

            userName.style.color="red"
            userName.style.border="5px solid red"
        }else if(password.value != 80732){
            password.style.color="red"
            password.style.border="5px solid red"

        }else{
            userName.style.color="red"
            userName.style.border="5px solid red"
            password.style.color="red"
            password.style.border="5px solid red"


        }
       
       
        

    }


})